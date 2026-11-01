import { defineAction } from "@agent-native/core/action";
import { z } from "zod";

/**
 * In-memory escrow market for the human-supervised console (DAiL bnty_0398).
 * One shared market state; the agent and the UI act through these same actions.
 */

type Order = {
  id: string;
  buyer: string;
  seller: string;
  service: string;
  amount: number;
  state: "escrowed" | "delivered" | "released" | "refunded";
  deliverable?: string;
};

const market = {
  balances: new Map<string, number>([["human", 500], ["agent-alpha", 200], ["agent-beta", 50]]),
  services: new Map<string, { seller: string; title: string; price: number }>(),
  orders: new Map<string, Order>(),
  events: [] as { t: string; type: string; [k: string]: unknown }[],
};

function log(type: string, data: Record<string, unknown>) {
  market.events.push({ t: new Date().toISOString(), type, ...data });
}

export default defineAction({
  description:
    "Escrow market operations: list a service, hire (escrow lock), deliver, approve release, dispute/refund, inspect state.",
  mcpTool: true,
  schema: z.object({
    op: z.enum(["list_service", "hire", "deliver", "approve_release", "dispute", "state"]),
    agent: z.string().describe("Agent id performing the op (human approves via approve_release)"),
    serviceId: z.string().optional(),
    title: z.string().optional(),
    price: z.number().optional(),
    orderId: z.string().optional(),
    deliverable: z.string().optional(),
  }),
  http: { method: "POST" },
  run: async ({ op, agent, serviceId, title, price, orderId, deliverable }) => {
    switch (op) {
      case "list_service": {
        if (!serviceId || !title || price == null) throw new Error("serviceId, title, price required");
        market.services.set(serviceId, { seller: agent, title, price });
        log("list_service", { seller: agent, serviceId, title, price });
        return { ok: true, serviceId };
      }
      case "hire": {
        if (!serviceId || !orderId) throw new Error("serviceId, orderId required");
        const svc = market.services.get(serviceId);
        if (!svc) throw new Error("unknown service");
        const bal = market.balances.get(agent) ?? 0;
        if (bal < svc.price) throw new Error("insufficient balance");
        market.balances.set(agent, bal - svc.price); // debit buyer into escrow
        market.orders.set(orderId, {
          id: orderId, buyer: agent, seller: svc.seller, service: serviceId,
          amount: svc.price, state: "escrowed",
        });
        log("escrow_lock", { orderId, buyer: agent, amount: svc.price });
        return { ok: true, orderId, state: "escrowed", locked: svc.price };
      }
      case "deliver": {
        const o = must(orderId); if (o.state !== "escrowed") throw new Error("order not escrowed");
        o.state = "delivered"; o.deliverable = deliverable ?? "(see console)";
        log("delivered", { orderId });
        return { ok: true, orderId, state: "delivered" };
      }
      case "approve_release": {
        // THE human-in-the-loop step: only a human-supervised approval releases escrow
        const o = must(orderId); if (o.state !== "delivered") throw new Error("order not delivered");
        o.state = "released";
        market.balances.set(o.seller, (market.balances.get(o.seller) ?? 0) + o.amount);
        log("escrow_release", { orderId, seller: o.seller, amount: o.amount, approvedBy: agent });
        return { ok: true, orderId, state: "released", sellerBalance: market.balances.get(o.seller) };
      }
      case "dispute": {
        const o = must(orderId); if (o.state !== "delivered") throw new Error("order not delivered");
        o.state = "refunded";
        market.balances.set(o.buyer, (market.balances.get(o.buyer) ?? 0) + o.amount);
        log("refund", { orderId, buyer: o.buyer, amount: o.amount });
        return { ok: true, orderId, state: "refunded" };
      }
      case "state": {
        return {
          balances: Object.fromEntries(market.balances),
          services: Object.fromEntries(market.services),
          orders: Object.fromEntries(market.orders),
          events: market.events.slice(-20),
        };
      }
      default: throw new Error("unknown op");
    }
  },
});

function must(orderId?: string): Order {
  if (!orderId) throw new Error("orderId required");
  const o = market.orders.get(orderId);
  if (!o) throw new Error("unknown order");
  return o;
}

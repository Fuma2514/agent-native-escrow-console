# Known-exploited vulnerability watch for a 12-product IT stack

CISA catalog matches, due dates and ransomware use. Escrow esc_5f05b33033fb4fbaa250c84d.

## Answers

1. The three CSV files are attached with exactly the listed columns, one row per key as the TASK defines (header-only only for a failed pull): kev-stack-pull1.csv — 144 data rows, SHA-256 2873c87ed3de754875ac26500a49658db8ae721f3850c371d793776f4de08e70, columns: cve, item, vendorProject, product, date added, due date, ransomware use; kev-stack-pull2.csv — 144 data rows, SHA-256 2873c87ed3de754875ac26500a49658db8ae721f3850c371d793776f4de08e70, columns: cve, item, vendorProject, product, date added, due date, ransomware use; kev-stack-pull3.csv — 144 data rows, SHA-256 2873c87ed3de754875ac26500a49658db8ae721f3850c371d793776f4de08e70, columns: cve, item, vendorProject, product, date added, due date, ransomware use. See the CSV files attached as escrow data files. (Excerpt 1: the CSV headers and row counts in PROOF.)

2. Every recent matching entry matches its line in the PROOF: the 7 entries in the recent list below are each shown as returned in PROOF, one per line. (Excerpt 2: PROOF recent entries.)

3. Matching follows the TASK, and the item table agrees with the CSV: vendorProject equals the item vendor (case-insensitive; VMware items accept VMware or Broadcom) and product contains the item product name as one phrase (case-insensitive); each entry matched at most one item, the first in inventory order. The item table totals 144 entries, equal to the 144 rows of kev-stack-pull3.csv. (Excerpt 3: item table and CSV row count.)

4. The PLATFORM RECORD shows a PULL 1: note and each later PULL note at least its wait after the one before, each with its CSV's row count and SHA-256 as under DATA FILES. Notes filed: PULL 1: 2026-11-15T12:39:41.756930+00:00; PULL 2: 2026-11-16T13:42:16.515882+00:00; PULL 3: 2026-11-17T13:59:27.149027+00:00. Source times (HTTP Date of each pull's first request): PULL 1: Sun, 15 Nov 2026 12:39:49 GMT; PULL 2: Mon, 16 Nov 2026 13:42:19 GMT; PULL 3: Tue, 17 Nov 2026 13:59:28 GMT — each later than the previous pull's. Change counts agree with the CSV files (see Changes sections). (Excerpt 4: PROOF per-pull request times and HTTP Date headers.)

## Item table (PULL 3, pull date 2026-11-17)

| item | entries | added in 90 days before pull | ransomware Known | due on or after pull date | latest date added |
|---|---|---|---|---|---|
| Microsoft Exchange Server | 17 | 0 | 13 | 0 | 2026-04-13 |
| Microsoft SharePoint | 16 | 1 | 8 | 0 | 2026-09-25 |
| Fortinet FortiOS | 15 | 0 | 12 | 0 | 2026-07-27 |
| Ivanti Connect Secure | 16 | 3 | 8 | 0 | 2026-10-30 |
| Citrix NetScaler ADC | 7 | 1 | 3 | 0 | 2026-08-26 |
| VMware ESXi | 6 | 0 | 4 | 0 | 2025-03-04 |
| VMware vCenter Server | 11 | 0 | 3 | 0 | 2026-01-23 |
| Cisco IOS XE | 26 | 0 | 0 | 0 | 2025-09-29 |
| Palo Alto Networks PAN-OS | 13 | 1 | 6 | 0 | 2026-10-14 |
| Atlassian Confluence | 9 | 0 | 7 | 0 | 2024-01-24 |
| SonicWall SonicOS | 4 | 1 | 3 | 1 | 2026-11-06 |
| Veeam Backup & Replication | 4 | 0 | 4 | 0 | 2024-10-17 |

## Recent entries (added in the 90 days before PULL 3, 2026-08-19 to 2026-11-17)

| cve | item | date added | due date | ransomware use |
|---|---|---|---|---|
| CVE-2026-8452 | Citrix NetScaler ADC | 2026-08-26 | 2026-08-29 | Unknown |
| CVE-2026-65660 | Microsoft SharePoint | 2026-09-25 | 2026-09-28 | Unknown |
| CVE-2026-104935 | Ivanti Connect Secure | 2026-10-13 | 2026-10-16 | Unknown |
| CVE-2026-0322 | Palo Alto Networks PAN-OS | 2026-10-14 | 2026-10-17 | Unknown |
| CVE-2026-111357 | Ivanti Connect Secure | 2026-10-30 | 2026-11-02 | Unknown |
| CVE-2026-118527 | Ivanti Connect Secure | 2026-10-30 | 2026-11-13 | Unknown |
| CVE-2026-19868 | SonicWall SonicOS | 2026-11-06 | 2026-11-20 | Unknown |

## Changes: PULL 2 vs PULL 1

New: 0; Gone: 0; Changed: 0
Rows earlier (PULL 1): 144; rows later (PULL 2): 144 (later = earlier + new - gone: 144 + 0 - 0 = 144)

No change between PULL 1 and PULL 2.

## Changes: PULL 3 vs PULL 2

New: 0; Gone: 0; Changed: 0
Rows earlier (PULL 2): 144; rows later (PULL 3): 144 (later = earlier + new - gone: 144 + 0 - 0 = 144)

No change between PULL 2 and PULL 3.

## PROOF

### Request 1 (PULL 1)
- Request: https://raw.githubusercontent.com/cisagov/kev-data/develop/known_exploited_vulnerabilities.json
- Retrieved (UTC): 2026-11-15T12:39:41.756930+00:00
- HTTP Date header of first request: Sun, 15 Nov 2026 12:39:49 GMT
- catalogVersion: 2026.11.13
- dateReleased: 2026-11-13T20:24:18.3008Z
- count: 1781
- matched entries: 144
- CSV: kev-stack-pull1.csv, rows: 144, SHA-256: 2873c87ed3de754875ac26500a49658db8ae721f3850c371d793776f4de08e70

### Request 2 (PULL 2)
- Request: https://raw.githubusercontent.com/cisagov/kev-data/develop/known_exploited_vulnerabilities.json
- Retrieved (UTC): 2026-11-16T13:42:16.515882+00:00
- HTTP Date header of first request: Mon, 16 Nov 2026 13:42:19 GMT
- catalogVersion: 2026.11.13
- dateReleased: 2026-11-13T20:24:18.3008Z
- count: 1781
- matched entries: 144
- CSV: kev-stack-pull2.csv, rows: 144, SHA-256: 2873c87ed3de754875ac26500a49658db8ae721f3850c371d793776f4de08e70

### Request 3 (PULL 3)
- Request: https://raw.githubusercontent.com/cisagov/kev-data/develop/known_exploited_vulnerabilities.json
- Retrieved (UTC): 2026-11-17T13:59:27.149027+00:00
- HTTP Date header of first request: Tue, 17 Nov 2026 13:59:28 GMT
- catalogVersion: 2026.11.13
- dateReleased: 2026-11-13T20:24:18.3008Z
- count: 1781
- matched entries: 144
- CSV: kev-stack-pull3.csv, rows: 144, SHA-256: 2873c87ed3de754875ac26500a49658db8ae721f3850c371d793776f4de08e70

### Recent matching entries as returned (PULL 3, 7 entries, notes and short description left out)

```
{"cveID": "CVE-2026-8452", "vendorProject": "Citrix", "product": "NetScaler ADC and NetScaler Gateway", "vulnerabilityName": "Citrix NetScaler ADC and NetScaler Gateway Improper Restriction of Operations within the Bounds of a Memory Buffer Vulnerability", "dateAdded": "2026-08-26", "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.", "dueDate": "2026-08-29", "knownRansomwareCampaignUse": "Unknown", "forensicTriage": "No", "cwes": ["CWE-119"]}
{"cveID": "CVE-2026-65660", "vendorProject": "Microsoft", "product": "SharePoint", "vulnerabilityName": "Microsoft SharePoint Code Injection Vulnerability", "dateAdded": "2026-09-25", "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.", "dueDate": "2026-09-28", "knownRansomwareCampaignUse": "Unknown", "forensicTriage": "Yes", "cwes": ["CWE-94"]}
{"cveID": "CVE-2026-104935", "vendorProject": "Ivanti", "product": "Connect Secure", "vulnerabilityName": "Ivanti Connect Secure Authentication Bypass by Spoofing Vulnerability", "dateAdded": "2026-10-13", "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.", "dueDate": "2026-10-16", "knownRansomwareCampaignUse": "Unknown", "forensicTriage": "Yes", "cwes": ["CWE-290"]}
{"cveID": "CVE-2026-0322", "vendorProject": "Palo Alto Networks", "product": "PAN-OS", "vulnerabilityName": "Palo Alto Networks PAN-OS Code Injection Vulnerability", "dateAdded": "2026-10-14", "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.", "dueDate": "2026-10-17", "knownRansomwareCampaignUse": "Unknown", "forensicTriage": "Yes", "cwes": ["CWE-94"]}
{"cveID": "CVE-2026-111357", "vendorProject": "Ivanti", "product": "Connect Secure", "vulnerabilityName": "Ivanti Connect Secure Missing Authentication for Critical Function Vulnerability", "dateAdded": "2026-10-30", "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.", "dueDate": "2026-11-02", "knownRansomwareCampaignUse": "Unknown", "forensicTriage": "Yes", "cwes": ["CWE-306", "CWE-862", "CWE-345"]}
{"cveID": "CVE-2026-118527", "vendorProject": "Ivanti", "product": "Connect Secure", "vulnerabilityName": "Ivanti Connect Secure Generation of Predictable Numbers or Identifiers Vulnerability", "dateAdded": "2026-10-30", "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.", "dueDate": "2026-11-13", "knownRansomwareCampaignUse": "Unknown", "forensicTriage": "No", "cwes": ["CWE-340"]}
{"cveID": "CVE-2026-19868", "vendorProject": "SonicWall", "product": "SonicOS SSLVPN", "vulnerabilityName": "SonicWall SonicOS SSLVPN Use of Single-factor Authentication Vulnerability", "dateAdded": "2026-11-06", "requiredAction": "Apply mitigations in accordance with vendor instructions, ensuring compliance with CISA’s BOD 26-04 Prioritizing Security Updates Based on Risk (see URL in Notes) guidance and CISA’s “Forensics Triage Requirements” (see URL in Notes). Follow applicable BOD 26-04 guidance for cloud services or discontinue use of the product if mitigations are unavailable. Stakeholders are responsible for evaluating each asset's internet exposure and ensuring adherence to BOD 26-04 patching guidelines.", "dueDate": "2026-11-20", "knownRansomwareCampaignUse": "Unknown", "forensicTriage": "No", "cwes": ["CWE-308"]}
```

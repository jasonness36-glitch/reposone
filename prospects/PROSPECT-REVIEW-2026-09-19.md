# Inbox Prospect Review — 2026-09-19

**Scope:** Inbound email to `jasonness36@gmail.com` and `jasonsturmer@jeriahbrokerllc.com`, roughly the last 30 days.

**ICP (from `demo/DEMO-SCRIPT.md` + `demo/CASE-STUDY-DOCS-HANDYMAN.md`):** owner-operated local home-service
businesses in the Sacramento / Northern California area — handyman, HVAC, roofing, solar, windows, exterior
cleaning. Pain points the offer solves: missed calls with no follow-up, leads scattered across phone / web form /
Facebook / referral, no review engine, phone-tag booking.

---

## Headline: zero genuine inbound inquiries

No one emailed asking about Jeriah Broker's services in this window. The inbox is newsletters, SaaS
onboarding, job alerts, and cold pitches *aimed at* Jason (business funding, GHL agency services).

What the inbox does contain is a set of **outbound-actionable buying signals** — local home-service companies
publicly advertising that they are paying humans $23–$35/hour to do the exact manual lead handling the
GHL build automates. Those are listed below.

**Read the blockers section first.** Two infrastructure problems mean outreach to any of these will not land today.

---

## Tier 1 — strongest fit

### 1. IMKAT Construction — Sacramento, CA
- **Signal:** Hiring "Lead Coordinator," $25–$35/hr. Posting has recurred in alerts from 9/2 through 9/19.
- **Their own words:** *"The Lead Coordinator owns the front end of IMKAT's sales process. Every inbound lead —
  web form, Google, Facebook, referral, phone call — lands in this seat first."*
- **Why it fits:** This is the demo script's pipeline slide written as a job description. They have already
  priced the problem at roughly $60k/year and are choosing to solve it with a headcount.
- **Angle:** Not "replace your hire" — "make that seat cover three times the volume." Lead straight into the
  missed-call text-back live demo.

### 2. Yancey Company — Sacramento, CA
- **Signal:** Call Center Representative, $23–$25/hr, posted 9/19 (freshest in the set).
- **Their own words:** *"comfortable handling high-volume calls, communicating with homeowners, and setting
  qualified appointments."*
- **Why it fits:** Homeowner-facing, appointment-driven, high call volume. Self-booking calendar plus
  missed-call text-back is a direct hit.

### 3. Roof Maxx of Sacramento
- **Signal:** Sales Manager – Home Improvement, $100k–$200k, posted 9/8.
- **Their own words:** *"a growing Northern California home-services organization."*
- **Why it fits:** Self-declared growth phase, greater Sacramento, home services. Growth without lead
  infrastructure is when pipeline leakage gets expensive — and a sales manager hire is the moment someone
  starts asking where the leads are going.

---

## Tier 2 — same pain, thinner detail

| Company | Location | Signal | Hook |
|---|---|---|---|
| Green Home Heating and Air | Northern CA (residential HVAC) | Hiring D2D Appointment Setter **Team Lead** | A whole team of setters = high lead volume, manual capture |
| Goodco Solutions | Sacramento | Solar inspection/field roles | Field crews out on jobs → missed calls, the core demo scenario |
| Diamond Solar Solutions, Inc. | Placerville (El Dorado County) | Hiring roof/solar leads, $32–$37/hr | Foothills cluster; adjacent to the 9/9 Auburn/Grass Valley territory |
| RME Innovations Inc. (dba Singh's Solar) | Arden-Arcade area | Repeated crew + lead hiring | Sustained hiring = sustained growth |
| Brightside Windows | Sacramento | Entry-level sales, $65k–$125k | Windows/home improvement, commission-driven, lead-hungry |
| USA Bath | Sacramento | Part-time **Lead Generators** at retail locations | Paying hourly for manual lead gen |
| Future Energy Corporation | Elk Grove | Canvassers, $20–$25/hr, residential | D2D volume with no visible capture system |
| LumaGlow Lighting | Sacramento area | D2D setters, permanent outdoor lighting | Newer trade, likely no CRM in place |
| JKR Windows | Sacramento area | Appointment Setter | Same shape as IMKAT, less detail given |
| Ascent Marketing Group | Sacramento | Lead Gen Specialists for LeafGuard gutters | Gutter trade — matches the 9/9 report's vertical |

**Caveat on this whole section:** these are hiring signals scraped from Indeed job alerts, not people who
raised a hand. Treat as a warm-ish outbound list, not a lead list. Each needs a decision-maker name before
contact — none of the postings name one.

---

## Carried over, still uncontacted

From the 2026-09-09 leads report. These never reached the Sheet or the CRM because the pipeline was down,
so they are still sitting unworked:

1. **Anthony's Gutter Cleaning & More** — Auburn, CA — (530) 936-4161 — 12135 Griffin Way, Auburn, CA 95602.
   No owned website across 5 sources. Licensed & insured, BBB profile, Nextdoor "Neighborhood Favorite" in
   38 neighborhoods. Report rated this SOLID. `anthonysgutterclean.com` was available as of 9/9.
2. **Foothills Solar Cleaning** — Grass Valley, CA — (530) 955-0909. No owned website across 3 sources,
   5.0 rating but only 4 reviews. Report flagged: confirm the business is still active before spending
   outreach time. `foothillssolarcleaning.com` was available as of 9/9.

The 9/9 report also noted an **earlier backfill batch still pending** from 8/30 — so the unworked backlog is
larger than these two.

---

## Blockers — fix before any outreach

### 1. Outbound email from the business domain is being rejected
Mail from `jeriahbrokerllc.com` is bouncing with **`550 5.7.26 — sender is unauthenticated`**. Both SPF and
DKIM fail. Confirmed on two sends:
- 9/8, outreach to Frank re: Jeremiah's House Recovery — blocked.
- 9/9, the leads report itself — blocked.

Every prospect email sent from this domain is being silently dropped by Gmail-hosted recipients, which is most
small businesses. Nothing else on this page matters until SPF and DKIM records are published for the domain.

Related and probably the same root cause: Google Workspace has been warning since 8/22 that contact
information for `jeriahbrokerllc.com` is unverified, with service interruption threatened. Squarespace has
sent the matching ICANN domain-contact verification notice repeatedly since 8/21 — still unactioned.

### 2. The lead pipeline has been down for over a month, and has now stopped entirely
- Zapier monthly task quota exhausted — `insufficient tasks on account` on 8/15, 8/20, 8/23, 8/25, 8/26, and 9/9.
  Brief recovery on 8/30–8/31, then broken again.
- Both LeadConnector / GoHighLevel connections went stale on 9/9, last refreshed 9/7.
- **No leads report has been generated since 9/9 — ten days.**

### 3. Supporting tooling degraded
The Apify actor "Google Maps Email Extractor" was **unpublished by its developer** on 9/10 and can no longer be
used. "Google Maps No-Website Leads Scraper" changed pricing on 8/21. The no-website sourcing method the daily
reports depend on needs a replacement actor.

---

## Other notes

- **Churn:** the `8310 Sunrise Blvd` client sub-account was scheduled for deletion 8/31 and deleted 9/1.
- **Named prospects already in flight** (from sent mail, outcome unknown — and note both may have been hit
  by the SPF/DKIM bounce): Gene at **Plug Electric** (free online-presence report sent 9/1), and Frank re:
  **Jeremiah's House Recovery** (local-SEO angle, 9/8 — this one is confirmed blocked).
- **Competitive signal:** `james@sayantech.com` cold-pitched Jason on 9/19 selling GHL automation to agencies
  ("10 clients to 50 without adding ops staff"). Vendor or competitor, not a prospect.
- **Not prospects:** the funding offers (Mobyfund, Upswing, Black Tie) are inbound sales aimed at Jeriah
  Broker, not opportunities.

---

## Suggested order of work

1. Publish SPF and DKIM for `jeriahbrokerllc.com`, and clear the ICANN / Workspace contact verification.
   Everything downstream is blocked on this.
2. Restore the Zapier quota and reconnect both LeadConnector accounts.
3. Work the two carried-over Auburn / Grass Valley leads by **phone** — they need no email and no pipeline.
4. Research decision-maker names for IMKAT Construction, Yancey Company, and Roof Maxx of Sacramento, then
   approach with the hiring-signal angle.
5. Replace the unpublished Apify actor so daily sourcing can resume.

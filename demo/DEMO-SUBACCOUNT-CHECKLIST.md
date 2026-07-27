# Demo Sub-Account Checklist — Doc's Handyman (Demo Environment)

Follow this one step at a time inside GoHighLevel to build the sub-account you'll use for live demos.

## 1. Create the sub-account
- [ ] Create a new sub-account named "Doc's Handyman Service (DEMO)"
- [ ] Set the business name, logo (placeholder is fine), and time zone to Pacific (Sacramento)

## 2. Set up the tracking number
- [ ] Go to **Settings > Phone Numbers**
- [ ] Buy or assign one local (916 or 279 area code) number
- [ ] Label it clearly: "DEMO Tracking Number — Do Not Reuse"
- [ ] Call it once to confirm it rings through to a phone you control

## 3. Build the missed-call text-back workflow
- [ ] Go to **Automation > Workflows > Create Workflow**
- [ ] Name it "Demo - Missed Call Text Back"
- [ ] Set the trigger to **Missed Call** (or **Call Status = No Answer**) on the tracking number
- [ ] Add a **Send SMS** action
- [ ] Copy this message in exactly:
  > Hey, sorry we missed you! This is Doc's Handyman — what can we help with?
- [ ] Set the delay to immediate (0 seconds)
- [ ] Turn the workflow **ON**
- [ ] Test it: call the tracking number, hang up without leaving a voicemail, confirm the text arrives within 10-15 seconds

## 4. Build the sample pipeline
- [ ] Go to **Opportunities > Pipelines > Create Pipeline**
- [ ] Name it "Demo - Handyman Jobs"
- [ ] Create these stages, in order: **New Lead, Quoted, Scheduled, Job Complete, Paid**
- [ ] Add 4-5 fake leads spread across the stages, for example:
  - [ ] Sarah M. — Leaky faucet → New Lead
  - [ ] Mike T. — TV mounting → Quoted
  - [ ] Angela R. — Deck repair → Scheduled
  - [ ] James P. — Drywall patch → Job Complete
  - [ ] Priya K. — Fence fix → Paid
- [ ] Give each card a fake phone number, email, and short note so it looks like a real lead

## 5. Build the review request workflow
- [ ] Go to **Automation > Workflows > Create Workflow**
- [ ] Name it "Demo - Review Request"
- [ ] Set the trigger to Opportunity stage changed to **Job Complete** (or **Paid**)
- [ ] Add a **Send SMS** action with a Google review link
- [ ] Sample message: "Thanks for choosing Doc's Handyman! Mind leaving us a quick Google review? [review link]"
- [ ] Turn the workflow **ON**
- [ ] Test it by dragging a demo lead into "Job Complete" and confirming the text fires

## 6. Set up the booking calendar
- [ ] Go to **Calendars > Create Calendar**
- [ ] Name it "Doc's Handyman - Book a Job"
- [ ] Set available hours (e.g., Mon-Sat, 8am-6pm)
- [ ] Add a couple of service types (e.g., "Free Estimate," "Repair Job")
- [ ] Grab the booking link and confirm it loads and lets you pick a time

## 7. Final run-through before every demo
- [ ] Reset any test leads moved during practice runs
- [ ] Confirm the tracking number still routes and the text-back still fires
- [ ] Confirm the pipeline shows 4-5 leads across different stages
- [ ] Confirm the review workflow is **ON**
- [ ] Confirm the booking calendar link works
- [ ] Have the Doc's Handyman case study open and ready in another tab

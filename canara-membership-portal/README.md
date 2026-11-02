# Canara Old Boys Association — Membership Portal

A responsive Next.js starter for the Canara High School Old Boys' Association (R.). It uses the supplied centenary logo and includes a functional client-side demo for membership enrollment, automatic membership IDs, printable fee receipts, location-wise member summaries, endowment donor records, CSV export, and a staff-role management screen.

## Run locally

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Included in this prototype

- **Overview:** membership totals, recorded fees, endowment totals, recent enrollments, and city breakdown.
- **Member enrollment:** captures applicant details and automatically assigns IDs in the format `CHSOBA-YYYY-NNNN`.
- **Receipts:** generates a printable life-membership fee receipt from the member record.
- **Location-wise active members:** city/location summary and location filter.
- **Endowment donor register:** add donor/family, purpose/prize, contact, date and amount.
- **Staff & roles screen:** demonstrates Super Admin and Counter Staff permissions, including revoking/restoring demo staff access.
- **CSV export:** export the currently filtered member list.
- **Browser persistence:** demo members and donors are stored in localStorage on the current browser.

## Important before real-world deployment

This is a **working UI prototype**, not a secure production system. The role switch is intentionally a demo control; browser localStorage is not a database and must not be used for official records. Before using it for the association's real member records or payments:

1. Add server-side authentication and authorization. Super Admin must be the only role allowed to grant/revoke users; Counter Staff should only access permitted enrollment/payment workflows. Enforce this in server actions/API routes, not only in the UI.
2. Connect PostgreSQL (or another managed database) and persist members, users, payments, receipts and donors transactionally.
3. Generate member IDs using a database sequence/transaction to avoid duplicate IDs when two counters enroll people simultaneously.
4. Store password hashes/session secrets securely; add audit logs for role changes, edits, cancellations and receipts.
5. Add receipt numbering, payment reconciliation, backup/restore, access controls, and a privacy/retention policy. Do not store card/bank credentials.
6. Confirm the association's approved receipt layout, fee rules, ID prefix and required application fields before launch.

## Suggested production data model

- `User`: name, email/phone, password hash or identity-provider ID, role, active flag.
- `Member`: unique membership ID, applicant details, postal address, location, passing year, date joined, status.
- `Payment`: member, amount, method, transaction/reference number, received date, receipt number, received-by user.
- `EndowmentDonor`: donor/family, contact, prize/endowment purpose, amount, date, notes.
- `AuditLog`: actor, action, entity, timestamp and change summary.

The supplied logo is in `public/canara-logo.jpg`.

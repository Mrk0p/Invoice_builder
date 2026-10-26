# Invoice Builder — Development Protocol

## Stack
- React with Vite
- JavaScript and CSS, keeping the initial implementation straightforward
- Browser print-to-PDF for the first PDF workflow; evaluate a dedicated PDF library only when requirements justify it
- No backend or secret credentials are required for the initial client-side app

## Product requirements
- Keep invoice data editable through React-controlled form fields.
- Keep the invoice preview synchronized with the editor.
- Follow the supplied invoice PDF: white page, blue top accent, invoice identity/date/billing period, seller and recipient blocks, services table, totals, payment details, and centered footer.
- Keep calculation logic separate from presentational components.
- Currency values use INR (₹) and two decimal places.
- Do not hard-code the user's private banking or invoice data into reusable defaults; use clearly marked sample data that can be edited.
- Do not silently leave instructional placeholder text in exported invoices.

## Workflow
1. Read existing source and ACTIVITY.md before editing.
2. Handle one issue or feature at a time.
3. Increment package.json version for every accepted application-code change.
4. Record version, date, change summary, commit SHA (when available), and test result in ACTIVITY.md.
5. Use descriptive commits and a feature/fix branch for substantive work.
6. Run available checks (install/build/test) where possible. Report unrun checks explicitly.
7. Never claim a commit, test, or deployment succeeded without tool confirmation.
8. Never overwrite user work without inspecting it first.

## Versioning
- Start at 0.1.0 for the initial React scaffold.
- Increment patch for small fixes and minor for backward-compatible features.
- Every accepted application-code change must have a version increment and activity-log entry.

## Acceptance checklist
- [ ] App starts with documented commands.
- [ ] Invoice fields are editable.
- [ ] Preview updates as fields change.
- [ ] Line items can be added and removed.
- [ ] Subtotal, tax, and total are derived from current data.
- [ ] Print layout resembles the reference and hides editor controls.
- [ ] Narrow screens remain usable.
- [ ] Activity log and application version are current.

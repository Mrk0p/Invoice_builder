# Invoice Builder

A React-based invoice editor with a live invoice preview and print-ready PDF export.

## Stack
- React 18
- Vite
- JavaScript
- CSS
- Lucide React icons

## Requirements
- Node.js 20 or newer recommended
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Create a production build with:

```bash
npm run build
npm run preview
```

## Features in the initial scaffold
- Editable invoice number, dates, billing period, seller and client details.
- Editable service items with quantity and rate.
- Add/remove service rows.
- Calculated subtotal, tax, and total due.
- Optional payment information section.
- Editable footer messages.
- Live preview with A4-oriented print styles.
- Download PDF through the browser print dialog (**Save as PDF**).

## Reference design
The layout follows the supplied September invoice PDF: blue top accent, invoice metadata, side-by-side billing parties, service table, right-aligned totals, payment information card, and centered footer.

## Version and change tracking
The current app version is defined by `package.json` and displayed in the UI. Every accepted application-code change should increment the version and be documented in `ACTIVITY.md`. Development rules are in `PROTOCOL.md`.

## Known limitations
- PDF export currently uses the browser's print dialog rather than generating a PDF file directly.
- The app scaffold has not yet been built or visually tested in a browser in this environment.
- Sample invoice details are placeholders; replace them before using an invoice professionally.

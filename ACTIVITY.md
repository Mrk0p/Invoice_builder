# Activity Log — Invoice Builder

## Current status
- Application version: 0.1.0
- Repository: https://github.com/Mrk0p/Invoice_builder
- Stack: React 18, Vite, JavaScript, CSS, Lucide React
- Reference design: supplied September invoice PDF
- Release state: initial scaffold committed; build and browser/PDF output not yet run in this environment

## Change history

### 2026-10-26 — Initial React scaffold (v0.1.0)
- Added Vite/React package configuration and app entry point.
- Added editable invoice fields for invoice metadata, seller/client details, service line items, tax, payment information, and footer.
- Added live invoice preview and derived subtotal/tax/total calculations.
- Added add/remove item controls, reset confirmation, and browser print-to-PDF action.
- Added responsive editor layout and A4 print styles based on the supplied reference.
- Added version display injected from package.json.
- Tests: Not run. GitHub file operations do not run npm install, Vite build, browser interaction, or PDF visual inspection.
- Commits:
  - `ca5685c9b529eb80d658216df8773aca0ba49096` — package.json
  - `2f8ba30c2a6791c424166087ade1717a1139c1fe` — index.html
  - `93056d749fafd8015b82be3585a504e9ae092283` — Vite config scaffold
  - `5949f59340838e1707410d49e7b95d6600668c95` — React entry point
  - `b2d39cb2357d23e63edb7d3e9d6ab00704c4cc5a` — editable invoice editor
  - `14a1277ad529a464d54f3795b093898a120f908f` — responsive and print styles
  - `295978c64c385354c264b5a3dacb47ca7ca73ed4` — app version define
  - `23273399da0675e7973890377cb92b9aa2ad73c5` — development protocol
  - `a06245333e32f3fb6e49834ac8dbf975eafded18` — activity log initial commit

## Rules
- Every accepted application-code change must increment package.json version and be recorded here.
- Record commit SHAs and actual test outcomes; never mark unrun tests as passed.
- Prefer one focused change per commit and a feature/fix branch for substantial changes.
- Check existing source before modifying files.

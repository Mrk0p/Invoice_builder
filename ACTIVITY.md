# Activity Log — Invoice Builder

## Current status
- Application version: 0.2.0
- Repository: https://github.com/Mrk0p/Invoice_builder
- Stack: React 18, Vite, JavaScript, CSS, Lucide React
- Reference design: supplied September invoice PDF
- Active refactor branch: refactor/feature-based-structure
- Validation: build and browser/PDF visual checks have not yet been run in this environment.

## Change history

### 2026-10-26 — Initial React scaffold (v0.1.0)
- Added Vite/React configuration, editor, live preview, calculations, responsive styling, print styles, and project docs.
- Initial scaffold commit history is available in the GitHub repository.

### 2026-10-26 — Feature-based architecture (v0.2.0)
- Extracted editable invoice defaults into `src/data/initialInvoice.js`.
- Extracted reusable form field and INR formatter into `src/shared/`.
- Split editor sections into independent modules under `src/features/`: invoice details, seller, client, line items, payment, footer, and editor composition.
- Split invoice preview into a preview container and components for header, billing parties, services table, totals, payment details, and footer.
- Extracted app toolbar into `src/features/app-shell/AppHeader.jsx`.
- Updated `src/App.jsx` to compose feature modules and keep invoice state/calculations at the app level.
- Bumped version to 0.2.0.
- Tests: Not run. GitHub file operations do not execute npm install, Vite build, browser interaction, or PDF visual inspection.
- Key commits on this branch:
  - `69fcf9008aeb5d796bff73a7a3d96e609cecf84b` — invoice defaults module
  - `6abe7989cf9338256c08c94c2d5ea073424d46d2` — currency formatter
  - `bd5597d79d9f696b7d8b75442882f1b92ba4e594` — reusable field
  - `95613f6b052d6a33ecb925fc97faef12b17bfe97` — line-item feature
  - `c3992d37418b67aa50e7b2c769b585890ba27ef3` — preview composition
  - `8f3b7adfa60b0725e5626bb9968145fe996c8ecd` — editor composition
  - `a1e59e95db00eadfdf22978c3ef27d84e3e0e865` — app header
  - `05ec4e68aa665a9b26e848ae9c27610f33bc2cee` — App composition refactor
  - `01d23e0465109eabb7f8a33ea0c09501b6ebe4fb` — version bump

## Rules
- Every accepted application-code change must increment package.json version and be recorded here.
- Record commit SHAs and actual test outcomes; never mark unrun tests as passed.
- Prefer one focused change per commit and a feature/fix branch for substantial changes.
- Check existing source before modifying files.

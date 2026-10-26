import Field from "../../shared/Field.jsx";

export default function InvoiceDetailsSection({ invoice, update }) {
  return (
    <section className="form-section">
      <h2>Invoice details</h2>
      <div className="form-grid">
        <Field label="Invoice number" value={invoice.number} onChange={(v) => update("number", v)} />
        <Field label="Invoice date" type="date" value={invoice.date} onChange={(v) => update("date", v)} />
        <Field label="Billing period · From" type="date" value={invoice.periodFrom} onChange={(v) => update("periodFrom", v)} />
        <Field label="Billing period · To" type="date" value={invoice.periodTo} onChange={(v) => update("periodTo", v)} />
      </div>
    </section>
  );
}
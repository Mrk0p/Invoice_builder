import Field from "../../shared/Field.jsx";

export default function ClientDetailsSection({ invoice, update }) {
  return (
    <section className="form-section">
      <h2>Bill to · Client</h2>
      <div className="form-grid">
        <Field label="Client / company" value={invoice.clientName} onChange={(v) => update("clientName", v)} />
        <Field label="Client address" value={invoice.clientAddress} onChange={(v) => update("clientAddress", v)} />
      </div>
    </section>
  );
}
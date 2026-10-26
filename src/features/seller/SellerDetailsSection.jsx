import Field from "../../shared/Field.jsx";

export default function SellerDetailsSection({ invoice, update }) {
  return (
    <section className="form-section">
      <h2>From · Your details</h2>
      <div className="form-grid">
        <Field label="Name / business" value={invoice.sellerName} onChange={(v) => update("sellerName", v)} />
        <Field label="Role" value={invoice.sellerRole} onChange={(v) => update("sellerRole", v)} />
        <Field label="Service line" value={invoice.sellerService} onChange={(v) => update("sellerService", v)} />
        <Field label="Address" value={invoice.sellerAddress} onChange={(v) => update("sellerAddress", v)} />
      </div>
    </section>
  );
}
import Field from "../../shared/Field.jsx";

export default function PaymentSection({ invoice, update, included, onToggle }) {
  return (
    <section className="form-section">
      <div className="section-title-row">
        <h2>Payment information</h2>
        <label className="toggle"><input type="checkbox" checked={included} onChange={(e) => onToggle(e.target.checked)} /><span>Include</span></label>
      </div>
      {included && <div className="form-grid">
        <Field label="Bank name" value={invoice.bankName} onChange={(v) => update("bankName", v)} />
        <Field label="Account holder" value={invoice.accountHolder} onChange={(v) => update("accountHolder", v)} />
        <Field label="Account number" value={invoice.accountNumber} onChange={(v) => update("accountNumber", v)} />
        <Field label="IFSC code" value={invoice.ifsc} onChange={(v) => update("ifsc", v)} />
        <Field label="MICR code" value={invoice.micr} onChange={(v) => update("micr", v)} />
      </div>}
    </section>
  );
}
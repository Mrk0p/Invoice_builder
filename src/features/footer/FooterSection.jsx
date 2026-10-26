import Field from "../../shared/Field.jsx";

export default function FooterSection({ invoice, update }) {
  return (
    <section className="form-section">
      <h2>Footer</h2>
      <div className="form-grid">
        <Field label="Thank-you message" value={invoice.footerThanks} onChange={(v) => update("footerThanks", v)} />
        <Field label="Contact line" value={invoice.footerContact} onChange={(v) => update("footerContact", v)} />
      </div>
    </section>
  );
}
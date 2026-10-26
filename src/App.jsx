import { useMemo, useState } from "react";
import { Plus, Trash2, Download, FileText, RotateCcw } from "lucide-react";

const initialInvoice = {
  number: "INV-2026-001",
  date: "2026-10-26",
  periodFrom: "2026-10-01",
  periodTo: "2026-10-26",
  sellerName: "Your Name",
  sellerRole: "Independent Professional",
  sellerService: "Consulting & Creative Services",
  sellerAddress: "Your address",
  clientName: "Client Company",
  clientAddress: "Client address",
  currency: "INR",
  taxRate: 0,
  bankName: "Bank name",
  accountHolder: "Account holder",
  accountNumber: "Account number",
  ifsc: "IFSC code",
  micr: "MICR code",
  footerThanks: "Thank you for your business!",
  footerContact: "Questions? Contact Your Name.",
};

const initialItems = [
  { id: 1, description: "Professional services", details: "Service delivery and project support", quantity: 1, rate: 25000 },
];

const money = (value) => new Intl.NumberFormat("en-IN", {
  style: "currency", currency: "INR", minimumFractionDigits: 2, maximumFractionDigits: 2,
}).format(Number(value) || 0);

function Field({ label, value, onChange, type = "text", placeholder }) {
  return <label className="field"><span>{label}</span><input type={type} value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} /></label>;
}

export default function App() {
  const [invoice, setInvoice] = useState(initialInvoice);
  const [items, setItems] = useState(initialItems);
  const [showPayment, setShowPayment] = useState(true);
  const update = (key, value) => setInvoice((current) => ({ ...current, [key]: value }));
  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + Math.max(0, Number(item.quantity) || 0) * Math.max(0, Number(item.rate) || 0), 0);
    const tax = subtotal * (Math.max(0, Number(invoice.taxRate) || 0) / 100);
    return { subtotal, tax, total: subtotal + tax };
  }, [items, invoice.taxRate]);

  const updateItem = (id, key, value) => setItems((current) => current.map((item) => item.id === id ? { ...item, [key]: value } : item));
  const addItem = () => setItems((current) => [...current, { id: Date.now(), description: "", details: "", quantity: 1, rate: 0 }]);
  const reset = () => {
    if (window.confirm("Reset the invoice to the sample data? Your current edits will be lost.")) {
      setInvoice(initialInvoice);
      setItems(initialItems);
    }
  };

  return (
    <main className="app-shell">
      <header className="topbar no-print">
        <a className="brand" href="#" aria-label="Invoice Builder home"><span className="brand-mark"><FileText size={19} /></span><span>Invoice<span className="brand-light">Builder</span></span></a>
        <div className="top-actions"><span className="version">v{__APP_VERSION__}</span><button className="button button-quiet" onClick={reset}><RotateCcw size={16} /> Reset</button><button className="button button-primary" onClick={() => window.print()}><Download size={16} /> Download PDF</button></div>
      </header>

      <section className="workspace">
        <aside className="editor no-print">
          <div className="editor-heading"><div><p className="eyebrow">WORKSPACE</p><h1>Invoice editor</h1><p className="muted">Edit any field. Your preview updates instantly.</p></div><span className="edit-pill">Editable</span></div>

          <section className="form-section">
            <h2>Invoice details</h2>
            <div className="form-grid">
              <Field label="Invoice number" value={invoice.number} onChange={(v) => update("number", v)} />
              <Field label="Invoice date" type="date" value={invoice.date} onChange={(v) => update("date", v)} />
              <Field label="Billing period · From" type="date" value={invoice.periodFrom} onChange={(v) => update("periodFrom", v)} />
              <Field label="Billing period · To" type="date" value={invoice.periodTo} onChange={(v) => update("periodTo", v)} />
            </div>
          </section>

          <section className="form-section">
            <h2>From · Your details</h2>
            <div className="form-grid">
              <Field label="Name / business" value={invoice.sellerName} onChange={(v) => update("sellerName", v)} />
              <Field label="Role" value={invoice.sellerRole} onChange={(v) => update("sellerRole", v)} />
              <Field label="Service line" value={invoice.sellerService} onChange={(v) => update("sellerService", v)} />
              <Field label="Address" value={invoice.sellerAddress} onChange={(v) => update("sellerAddress", v)} />
            </div>
          </section>

          <section className="form-section">
            <h2>Bill to · Client</h2>
            <div className="form-grid">
              <Field label="Client / company" value={invoice.clientName} onChange={(v) => update("clientName", v)} />
              <Field label="Client address" value={invoice.clientAddress} onChange={(v) => update("clientAddress", v)} />
            </div>
          </section>

          <section className="form-section">
            <div className="section-title-row"><h2>Services & items</h2><button className="button button-small" onClick={addItem}><Plus size={15} /> Add item</button></div>
            <div className="items-editor">
              {items.map((item, index) => <div className="item-editor" key={item.id}>
                <div className="item-editor-top"><strong>Item {index + 1}</strong>{items.length > 1 && <button className="icon-button danger" aria-label="Remove item" onClick={() => setItems((current) => current.filter((entry) => entry.id !== item.id))}><Trash2 size={15} /></button>}</div>
                <Field label="Description" value={item.description} onChange={(v) => updateItem(item.id, "description", v)} placeholder="Service or product" />
                <Field label="Details (optional)" value={item.details} onChange={(v) => updateItem(item.id, "details", v)} placeholder="What was included?" />
                <div className="form-grid item-numbers">
                  <Field label="Quantity" type="number" value={String(item.quantity)} onChange={(v) => updateItem(item.id, "quantity", v)} />
                  <Field label="Rate (₹)" type="number" value={String(item.rate)} onChange={(v) => updateItem(item.id, "rate", v)} />
                </div>
              </div>)}
            </div>
            <div className="form-grid tax-field"><Field label="Tax / GST (%)" type="number" value={String(invoice.taxRate)} onChange={(v) => update("taxRate", v)} /></div>
          </section>

          <section className="form-section">
            <div className="section-title-row"><h2>Payment information</h2><label className="toggle"><input type="checkbox" checked={showPayment} onChange={(e) => setShowPayment(e.target.checked)} /><span>Include</span></label></div>
            {showPayment && <div className="form-grid">
              <Field label="Bank name" value={invoice.bankName} onChange={(v) => update("bankName", v)} />
              <Field label="Account holder" value={invoice.accountHolder} onChange={(v) => update("accountHolder", v)} />
              <Field label="Account number" value={invoice.accountNumber} onChange={(v) => update("accountNumber", v)} />
              <Field label="IFSC code" value={invoice.ifsc} onChange={(v) => update("ifsc", v)} />
              <Field label="MICR code" value={invoice.micr} onChange={(v) => update("micr", v)} />
            </div>}
          </section>
          <section className="form-section">
            <h2>Footer</h2>
            <div className="form-grid"><Field label="Thank-you message" value={invoice.footerThanks} onChange={(v) => update("footerThanks", v)} /><Field label="Contact line" value={invoice.footerContact} onChange={(v) => update("footerContact", v)} /></div>
          </section>
          <p className="editor-note">Tip: use <strong>Download PDF</strong> to open your browser’s print dialog, then choose “Save as PDF”.</p>
        </aside>

        <section className="preview-area">
          <div className="preview-toolbar no-print"><div><span className="live-dot" /> Live preview</div><span>A4 · Portrait</span></div>
          <article className="invoice-paper">
            <div className="invoice-accent" />
            <div className="invoice-content">
              <div className="invoice-header">
                <div><h2 className="invoice-title">INVOICE</h2><p className="invoice-number"># {invoice.number || "—"}</p></div>
                <div className="invoice-meta"><span>Invoice Date</span><strong>{invoice.date || "—"}</strong><span className="billing-label">Billing Period</span><div className="period-line"><span>From:</span><strong>{invoice.periodFrom || "—"}</strong></div><div className="period-line"><span>To:</span><strong>{invoice.periodTo || "—"}</strong></div></div>
              </div>

              <div className="parties">
                <div className="party"><p className="party-label">BILLED BY</p><h3>{invoice.sellerName || "—"}</h3><p>{invoice.sellerRole}</p><p className="party-small">{invoice.sellerService}</p><p className="party-address">{invoice.sellerAddress}</p></div>
                <div className="party party-right"><p className="party-label">BILLED TO</p><h3>{invoice.clientName || "—"}</h3><p className="party-address">{invoice.clientAddress}</p></div>
              </div>

              <div className="invoice-divider" />
              <section className="services-section"><h3 className="section-heading">Description of Services</h3>
                <table className="services-table"><thead><tr><th>DESCRIPTION</th><th>QTY</th><th className="amount-cell">AMOUNT (₹)</th></tr></thead><tbody>
                  {items.map((item) => <tr key={item.id}><td><strong>{item.description || "Service description"}</strong>{item.details && <p className="item-details">{item.details}</p>}</td><td className="qty-cell">{Number(item.quantity) || 0}</td><td className="amount-cell">{money((Number(item.quantity) || 0) * (Number(item.rate) || 0))}</td></tr>)}
                </tbody></table>
              </section>

              <div className="totals"><div><span>Subtotal</span><strong>{money(totals.subtotal)}</strong></div><div><span>GST / Tax ({Number(invoice.taxRate) || 0}%)</span><strong>{money(totals.tax)}</strong></div><div className="total-due"><span>Total Due</span><strong>{money(totals.total)}</strong></div></div>

              {showPayment && <section className="payment-card"><h3>PAYMENT INFORMATION</h3><div className="payment-grid"><div><span>Bank Name</span><strong>{invoice.bankName || "—"}</strong></div><div><span>Account Holder</span><strong>{invoice.accountHolder || "—"}</strong></div><div><span>Account Number</span><strong>{invoice.accountNumber || "—"}</strong></div><div><span>IFSC Code</span><strong>{invoice.ifsc || "—"}</strong></div><div><span>MICR Code</span><strong>{invoice.micr || "—"}</strong></div></div></section>}
              <footer className="invoice-footer"><p>{invoice.footerThanks}</p><span>{invoice.footerContact}</span></footer>
            </div>
          </article>
          <p className="preview-footnote no-print">Preview reflects the current editor values. Confirm invoice details before sending.</p>
        </section>
      </section>
    </main>
  );
}
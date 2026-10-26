export default function InvoiceHeader({ invoice }) {
  return <div className="invoice-header">
    <div><h2 className="invoice-title">INVOICE</h2><p className="invoice-number"># {invoice.number || "—"}</p></div>
    <div className="invoice-meta"><span>Invoice Date</span><strong>{invoice.date || "—"}</strong><span className="billing-label">Billing Period</span><div className="period-line"><span>From:</span><strong>{invoice.periodFrom || "—"}</strong></div><div className="period-line"><span>To:</span><strong>{invoice.periodTo || "—"}</strong></div></div>
  </div>;
}
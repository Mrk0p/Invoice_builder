export default function BillingParties({ invoice }) {
  return <div className="parties">
    <div className="party"><p className="party-label">BILLED BY</p><h3>{invoice.sellerName || "—"}</h3><p>{invoice.sellerRole}</p><p className="party-small">{invoice.sellerService}</p><p className="party-address">{invoice.sellerAddress}</p></div>
    <div className="party party-right"><p className="party-label">BILLED TO</p><h3>{invoice.clientName || "—"}</h3><p className="party-address">{invoice.clientAddress}</p></div>
  </div>;
}
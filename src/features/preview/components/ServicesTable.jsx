export default function ServicesTable({ items, formatCurrency }) {
  return <section className="services-section"><h3 className="section-heading">Description of Services</h3>
    <table className="services-table"><thead><tr><th>DESCRIPTION</th><th>QTY</th><th className="amount-cell">AMOUNT (₹)</th></tr></thead><tbody>
      {items.map((item) => <tr key={item.id}><td><strong>{item.description || "Service description"}</strong>{item.details && <p className="item-details">{item.details}</p>}</td><td className="qty-cell">{Number(item.quantity) || 0}</td><td className="amount-cell">{formatCurrency((Number(item.quantity) || 0) * (Number(item.rate) || 0))}</td></tr>)}
    </tbody></table>
  </section>;
}
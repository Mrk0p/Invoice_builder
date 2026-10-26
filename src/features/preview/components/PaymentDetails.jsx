export default function PaymentDetails({ invoice }) {
  return <section className="payment-card"><h3>PAYMENT INFORMATION</h3><div className="payment-grid">
    <div><span>Bank Name</span><strong>{invoice.bankName || "—"}</strong></div>
    <div><span>Account Holder</span><strong>{invoice.accountHolder || "—"}</strong></div>
    <div><span>Account Number</span><strong>{invoice.accountNumber || "—"}</strong></div>
    <div><span>IFSC Code</span><strong>{invoice.ifsc || "—"}</strong></div>
    <div><span>MICR Code</span><strong>{invoice.micr || "—"}</strong></div>
  </div></section>;
}
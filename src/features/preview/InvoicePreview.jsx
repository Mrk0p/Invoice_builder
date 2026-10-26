import { formatCurrency } from "../../shared/formatCurrency.js";
import InvoiceHeader from "./components/InvoiceHeader.jsx";
import BillingParties from "./components/BillingParties.jsx";
import ServicesTable from "./components/ServicesTable.jsx";
import TotalsSummary from "./components/TotalsSummary.jsx";
import PaymentDetails from "./components/PaymentDetails.jsx";
import InvoiceFooter from "./components/InvoiceFooter.jsx";

export default function InvoicePreview({ invoice, items, totals, showPayment }) {
  return (
    <section className="preview-area">
      <div className="preview-toolbar no-print"><div><span className="live-dot" /> Live preview</div><span>A4 · Portrait</span></div>
      <article className="invoice-paper">
        <div className="invoice-accent" />
        <div className="invoice-content">
          <InvoiceHeader invoice={invoice} />
          <BillingParties invoice={invoice} />
          <div className="invoice-divider" />
          <ServicesTable items={items} formatCurrency={formatCurrency} />
          <TotalsSummary totals={totals} taxRate={invoice.taxRate} formatCurrency={formatCurrency} />
          {showPayment && <PaymentDetails invoice={invoice} />}
          <InvoiceFooter invoice={invoice} />
        </div>
      </article>
      <p className="preview-footnote no-print">Preview reflects the current editor values. Confirm invoice details before sending.</p>
    </section>
  );
}
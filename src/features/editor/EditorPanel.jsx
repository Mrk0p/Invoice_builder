import { RotateCcw } from "lucide-react";
import InvoiceDetailsSection from "../invoice-details/InvoiceDetailsSection.jsx";
import SellerDetailsSection from "../seller/SellerDetailsSection.jsx";
import ClientDetailsSection from "../client/ClientDetailsSection.jsx";
import ItemsSection from "../items/ItemsSection.jsx";
import PaymentSection from "../payment/PaymentSection.jsx";
import FooterSection from "../footer/FooterSection.jsx";

export default function EditorPanel({ invoice, update, items, updateItem, addItem, removeItem, reset, showPayment, setShowPayment }) {
  return <aside className="editor no-print">
    <div className="editor-heading"><div><p className="eyebrow">WORKSPACE</p><h1>Invoice editor</h1><p className="muted">Edit any field. Your preview updates instantly.</p></div><span className="edit-pill">Editable</span></div>
    <InvoiceDetailsSection invoice={invoice} update={update} />
    <SellerDetailsSection invoice={invoice} update={update} />
    <ClientDetailsSection invoice={invoice} update={update} />
    <ItemsSection items={items} updateItem={updateItem} addItem={addItem} removeItem={removeItem} taxRate={invoice.taxRate} updateTaxRate={(v) => update("taxRate", v)} />
    <PaymentSection invoice={invoice} update={update} included={showPayment} onToggle={setShowPayment} />
    <FooterSection invoice={invoice} update={update} />
    <p className="editor-note">Tip: use <strong>Download PDF</strong> to open your browser’s print dialog, then choose “Save as PDF”.</p>
  </aside>;
}
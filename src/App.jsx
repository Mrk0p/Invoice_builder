import { useMemo, useState } from "react";
import { initialInvoice, initialItems } from "./data/initialInvoice.js";
import AppHeader from "./features/app-shell/AppHeader.jsx";
import EditorPanel from "./features/editor/EditorPanel.jsx";
import InvoicePreview from "./features/preview/InvoicePreview.jsx";

export default function App() {
  const [invoice, setInvoice] = useState(initialInvoice);
  const [items, setItems] = useState(initialItems);
  const [showPayment, setShowPayment] = useState(true);

  const update = (key, value) => setInvoice((current) => ({ ...current, [key]: value }));
  const updateItem = (id, key, value) => setItems((current) => current.map((item) => item.id === id ? { ...item, [key]: value } : item));
  const addItem = () => setItems((current) => [...current, { id: Date.now(), description: "", details: "", quantity: 1, rate: 0 }]);
  const removeItem = (id) => setItems((current) => current.filter((item) => item.id !== id));

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + Math.max(0, Number(item.quantity) || 0) * Math.max(0, Number(item.rate) || 0), 0);
    const tax = subtotal * (Math.max(0, Number(invoice.taxRate) || 0) / 100);
    return { subtotal, tax, total: subtotal + tax };
  }, [items, invoice.taxRate]);

  const reset = () => {
    if (window.confirm("Reset the invoice to the sample data? Your current edits will be lost.")) {
      setInvoice({ ...initialInvoice });
      setItems(initialItems.map((item) => ({ ...item })));
      setShowPayment(true);
    }
  };

  return (
    <main className="app-shell">
      <AppHeader onReset={reset} />
      <section className="workspace">
        <EditorPanel
          invoice={invoice}
          update={update}
          items={items}
          updateItem={updateItem}
          addItem={addItem}
          removeItem={removeItem}
          reset={reset}
          showPayment={showPayment}
          setShowPayment={setShowPayment}
        />
        <InvoicePreview invoice={invoice} items={items} totals={totals} showPayment={showPayment} />
      </section>
    </main>
  );
}
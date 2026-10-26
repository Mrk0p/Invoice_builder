import { Plus, Trash2 } from "lucide-react";
import Field from "../../shared/Field.jsx";

export default function ItemsSection({ items, updateItem, addItem, removeItem, taxRate, updateTaxRate }) {
  return (
    <section className="form-section">
      <div className="section-title-row"><h2>Services & items</h2><button className="button button-small" onClick={addItem}><Plus size={15} /> Add item</button></div>
      <div className="items-editor">
        {items.map((item, index) => <div className="item-editor" key={item.id}>
          <div className="item-editor-top"><strong>Item {index + 1}</strong>{items.length > 1 && <button className="icon-button danger" aria-label={`Remove item ${index + 1}`} onClick={() => removeItem(item.id)}><Trash2 size={15} /></button>}</div>
          <Field label="Description" value={item.description} onChange={(v) => updateItem(item.id, "description", v)} placeholder="Service or product" />
          <Field label="Details (optional)" value={item.details} onChange={(v) => updateItem(item.id, "details", v)} placeholder="What was included?" />
          <div className="form-grid item-numbers">
            <Field label="Quantity" type="number" value={String(item.quantity)} onChange={(v) => updateItem(item.id, "quantity", v)} />
            <Field label="Rate (₹)" type="number" value={String(item.rate)} onChange={(v) => updateItem(item.id, "rate", v)} />
          </div>
        </div>)}
      </div>
      <div className="form-grid tax-field"><Field label="Tax / GST (%)" type="number" value={String(taxRate)} onChange={updateTaxRate} /></div>
    </section>
  );
}
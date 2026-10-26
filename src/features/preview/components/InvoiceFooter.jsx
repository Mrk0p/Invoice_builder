export default function InvoiceFooter({ invoice }) {
  return <footer className="invoice-footer"><p>{invoice.footerThanks}</p><span>{invoice.footerContact}</span></footer>;
}
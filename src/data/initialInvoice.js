export const initialInvoice = {
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
  taxRate: 0,
  bankName: "Bank name",
  accountHolder: "Account holder",
  accountNumber: "Account number",
  ifsc: "IFSC code",
  micr: "MICR code",
  footerThanks: "Thank you for your business!",
  footerContact: "Questions? Contact Your Name.",
};

export const initialItems = [
  { id: 1, description: "Professional services", details: "Service delivery and project support", quantity: 1, rate: 25000 },
];
export const siteConfig = {
  businessName: "BEV.CUTS",
  location: "Windsor, Ontario",
  instagramHandle: "@bev.cuts",
  instagramUrl: "https://www.instagram.com/bev.cuts/",
  contactHandle: "@bev.basslalou",
  bookingUrl: "https://cal.com/bev-cuts",
  basePrice: "$35"
};

export const services = [
  { name: "Haircut", price: "$35", detail: "Clean shape, finished edges, sharp styling." },
  { name: "Taper Fade", price: "$35", detail: "Low, mid, or high taper with balanced blend work." },
  { name: "Skin Fade", price: "$35", detail: "Premium fade work with a polished skin finish." },
  { name: "Line Up", price: "$20", detail: "Crisp front, temples, neckline, and detail cleanup." },
  { name: "Beard Work", price: "$15", detail: "Defined beard shaping and razor-clean finish." },
  { name: "Hair + Beard", price: "$45", detail: "Full cut, beard work, lineup, and styling." }
] as const;

export const whyChooseUs = [
  "Clean Fades",
  "Sharp Lineups",
  "Premium Service",
  "Consistent Results",
  "Modern Styling",
  "Windsor Based"
] as const;

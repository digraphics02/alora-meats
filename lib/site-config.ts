// Placeholder business details — replace every value below once real
// content/contact docs are supplied. Nothing here should ship as-is.

export const siteConfig = {
  name: "Alora Meats",
  phoneDisplay: "(000) 000-0000",
  phoneHref: "tel:+10000000000",
  email: "info@example.com",
  address: "Address pending",
  hours: "Hours pending",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
};

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Our Meats", href: "/our-meats/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

export const meatCategories = [
  { name: "Beef", slug: "beef" },
  { name: "Poultry", slug: "poultry" },
  { name: "Pork", slug: "pork" },
  { name: "Lamb", slug: "lamb" },
  { name: "Specialty Cuts", slug: "specialty-cuts" },
];

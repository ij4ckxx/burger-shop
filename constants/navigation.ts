export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Menu", href: "#menu" },
  { label: "Offers", href: "#offers", badge: "HOT" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
];

export const STORE_INFO = {
  name: "BURGER CRAFT",
  phone: "+1 (800) 555-CRAFT",
  email: "orders@burgercraft.com",
  location: "742 Evergreen Terrace, Foodville",
  deliveryTime: "20 - 30 Mins",
  hours: "Mon - Sun: 10:00 AM - 02:00 AM",
};

export const FOOTER_SECTIONS = [
  {
    title: "Quick Links",
    links: [
      { label: "Our Story", href: "#" },
      { label: "Full Menu", href: "#menu" },
      { label: "Special Combos", href: "#offers" },
      { label: "Locations & Delivery", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Signature Flame-Grilled", href: "#menu" },
      { label: "Smash Burgers", href: "#menu" },
      { label: "Crispy Buttermilk Chicken", href: "#menu" },
      { label: "100% Plant-Based", href: "#menu" },
      { label: "Loaded Fries & Drinks", href: "#menu" },
    ],
  },
  {
    title: "Customer Support",
    links: [
      { label: "Track Your Order", href: "#" },
      { label: "Refund Policy", href: "#" },
      { label: "FAQs & Support", href: "#" },
      { label: "Nutritional & Allergens", href: "#" },
      { label: "Franchise Inquiry", href: "#" },
    ],
  },
];

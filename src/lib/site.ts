export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://studioia.com";

function phoneToTelHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `tel:+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `tel:+${digits}`;
  return digits ? `tel:+${digits}` : "#";
}

const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "(805) 555-0123";
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@studioia.com";

export const siteConfig = {
  name: "Studio IAR",
  legalName: "Studio IAR",
  tagline: "Thoughtful interiors. Seamless coordination.",
  promise: "Thoughtful interiors. Seamless coordination.",
  phone,
  phoneHref: phoneToTelHref(phone),
  email,
  emailHref: email ? `mailto:${email}` : "#",
  serviceArea: "Santa Barbara County, CA",
  url: siteUrl,
  description:
    "Studio IAR is a Santa Barbara interior design studio offering design consulting, material sourcing, and project coordination for residential and hospitality — with a local specialty in ADU coordination.",
  locale: "en_US",
  address: {
    streetAddress: "",
    addressLocality: "Santa Barbara",
    addressRegion: "CA",
    postalCode: "",
    addressCountry: "US",
  },
  geo: {
    latitude: 34.4208,
    longitude: -119.6982,
  },
  areaServed: [
    "Santa Barbara",
    "Montecito",
    "Goleta",
    "Carpinteria",
    "Summerland",
    "Ventura",
  ],
  founder: {
    name: "Imogen Adams Reyes",
    role: "Founder & Principal",
    bio: "Imogen Adams Reyes founded Studio IAR after 15 years in interior design — including major hotels and restaurants — to offer Santa Barbara clients design consulting, material sourcing, and project coordination, with ADU coordination as a local specialty alongside licensed partners.",
  },
  social: {
    sameAs: [] as string[],
  },
  ogImage: "/work/santa-barbara-west-side-adu/kitchen.jpg",
};

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/work", label: "Work" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact", cta: true },
] as const;

export const footerLinks = {
  services: [
    { href: "/services/interior-design-consulting", label: "Design Consulting" },
    { href: "/services/material-sourcing", label: "Material Sourcing" },
    { href: "/services/project-coordination", label: "Project Coordination" },
    { href: "/services/design-build", label: "ADU Full Journey" },
    { href: "/services/adu-design", label: "ADU Design" },
    { href: "/services/permitting", label: "Permit Coordination" },
  ],
  areas: [
    { href: "/areas/santa-barbara", label: "Santa Barbara" },
    { href: "/areas/montecito", label: "Montecito" },
    { href: "/areas/goleta", label: "Goleta" },
    { href: "/areas/carpinteria", label: "Carpinteria" },
    { href: "/areas/summerland", label: "Summerland" },
    { href: "/areas/ventura", label: "Ventura" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/process", label: "Process" },
    { href: "/work", label: "Projects" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

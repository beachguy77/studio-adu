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
  name: "Studio IA",
  legalName: "Studio IA",
  tagline: "ADU design and construction with a human touch",
  phone,
  phoneHref: phoneToTelHref(phone),
  email,
  emailHref: email ? `mailto:${email}` : "#",
  serviceArea: "Santa Barbara County, CA",
  url: siteUrl,
  description:
    "Studio IA designs and builds accessory dwelling units across Santa Barbara County — from concept and permits to construction — with a human touch at every step.",
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
    bio: "Imogen Adams Reyes founded Studio IA to bring thoughtful, human-centered ADU design and construction to Santa Barbara County. She guides homeowners from first feasibility conversations through permitting and build — with clear communication, local expertise, and care for how each project lives on the land.",
  },
  social: {
    // Add real profiles when available for E-E-A-T / sameAs
    sameAs: [] as string[],
  },
  ogImage:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=630&fit=crop&q=80",
};

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact", cta: true },
] as const;

export const footerLinks = {
  services: [
    { href: "/services/adu-design", label: "ADU Design" },
    { href: "/services/adu-construction", label: "ADU Construction" },
    { href: "/services/garage-conversion", label: "Garage Conversion" },
    { href: "/services/design-build", label: "Design-Build" },
    { href: "/services/permitting", label: "Permitting" },
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
    { href: "/work", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

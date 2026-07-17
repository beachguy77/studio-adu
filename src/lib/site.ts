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
  tagline: "Thoughtful Design. Seamless Delivery.",
  promise: "One Team. One Process. One Beautiful ADU.",
  phone,
  phoneHref: phoneToTelHref(phone),
  email,
  emailHref: email ? `mailto:${email}` : "#",
  serviceArea: "Santa Barbara County, CA",
  url: siteUrl,
  description:
    "Studio IA is a premium ADU design and project management studio in Santa Barbara. One point of contact from feasibility and design through permitting and construction coordination.",
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
    bio: "Imogen Adams Reyes founded Studio IA to give Santa Barbara homeowners one trusted point of contact for ADUs — coordinating design, consultants, permitting, and licensed builders into a clear, carefully managed experience.",
  },
  social: {
    sameAs: [] as string[],
  },
  ogImage:
    "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1200&h=630&fit=crop&q=80",
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
    { href: "/services/adu-design", label: "ADU Design" },
    { href: "/services/adu-construction", label: "Construction Coordination" },
    { href: "/services/garage-conversion", label: "Garage Conversion" },
    { href: "/services/design-build", label: "Full Journey" },
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

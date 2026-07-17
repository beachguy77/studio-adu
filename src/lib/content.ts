export const siteConfig = {
  name: "Studio IA",
  phone: "(805) 555-0123",
  phoneHref: "tel:+18055550123",
  email: "hello@studioia.com",
  emailHref: "mailto:hello@studioia.com",
  serviceArea: "Santa Barbara County, CA",
  description:
    "Studio IA — Full-service ADU design and construction in Santa Barbara County. From consultation to completion, or pick the services you need — with a human touch at every step.",
};

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact", cta: true },
] as const;

export const services = [
  {
    step: "01",
    title: "Consultation",
    description:
      "Site feasibility, zoning review, and budget guidance to see if an ADU is right for your property.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Custom floor plans, elevations, and material selections tailored to your lot and lifestyle.",
  },
  {
    step: "03",
    title: "Architectural drawings",
    description:
      "Permit-ready plan sets prepared to meet Santa Barbara County requirements.",
  },
  {
    step: "04",
    title: "Plan submission",
    description:
      "We handle submittals, revisions, and coordination with county planners on your behalf.",
  },
  {
    step: "05",
    title: "Construction",
    description:
      "Quality build management from foundation to framing, finishes, and systems.",
  },
  {
    step: "06",
    title: "Completion",
    description:
      "Final inspections, certificate of occupancy, and a smooth handoff when your ADU is ready.",
  },
] as const;

export const projects = [
  {
    location: "Goleta · Full build",
    title: "Coastal cottage ADU",
    description:
      "650 sq ft detached unit with open living, full kitchen, and private patio.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    location: "Santa Barbara · Design & permits",
    title: "Hillside studio ADU",
    description:
      "Custom design and county plan submission for a compact backyard studio.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    location: "Carpinteria · Design only",
    title: "Garden guest suite",
    description:
      "Architectural drawings and design package for a client-managed build.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd2e?w=800&q=80",
  },
] as const;

export const processSteps = [
  {
    title: "Consult",
    description: "We review your property, goals, and budget.",
  },
  {
    title: "Design",
    description: "Plans take shape with your input at every step.",
  },
  {
    title: "Permit",
    description: "Drawings are submitted and tracked through approval.",
  },
  {
    title: "Build",
    description: "Construction is managed with quality and timeline in mind.",
  },
  {
    title: "Move in",
    description: "Final sign-off and handoff of your finished ADU.",
  },
] as const;

export const aboutStats = [
  { value: "SB County", label: "Service area" },
  { value: "Start to stop", label: "Full-service option" },
  { value: "À la carte", label: "Pick your services" },
] as const;

export const heroImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80";

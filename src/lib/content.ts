export const servicesPreview = [
  {
    step: "01",
    title: "Design consulting",
    description:
      "Residential and hospitality interiors shaped with clarity — concepts, finishes, and decisions that hold up in real life.",
    href: "/services/interior-design-consulting",
  },
  {
    step: "02",
    title: "Material sourcing",
    description:
      "Fixtures, surfaces, and furnishings selected with care — so the palette, budget, and lead times stay coherent.",
    href: "/services/material-sourcing",
  },
  {
    step: "03",
    title: "Project coordination",
    description:
      "One point of contact across consultants and trades — fewer handoffs and a calmer path from idea to installation.",
    href: "/services/project-coordination",
  },
  {
    step: "04",
    title: "ADU coordination",
    description:
      "A local specialty: feasibility through design, permitting, and construction coordination with licensed partners.",
    href: "/services/design-build",
  },
] as const;

export const processSteps = [
  {
    title: "Consult",
    description: "We listen, clarify scope, and define the right engagement.",
  },
  {
    title: "Design",
    description: "Interiors take shape — concepts, materials, and spatial decisions.",
  },
  {
    title: "Source",
    description: "Finishes and furnishings are selected and scheduled with care.",
  },
  {
    title: "Coordinate",
    description: "Licensed partners and trades stay aligned through delivery.",
  },
  {
    title: "Deliver",
    description: "Final walkthrough, handoff, and a space that feels considered.",
  },
] as const;

export const aboutStats = [
  { value: "15 years", label: "Interior design experience" },
  { value: "One studio", label: "Consulting, sourcing & coordination" },
  { value: "ADU specialty", label: "Local coordination with licensed partners" },
] as const;

export const whyStudioIAR = {
  traditional: {
    label: "Traditional",
    steps: ["Designer", "Architect", "Engineer", "Contractor", "You manage everyone"],
  },
  studio: {
    label: "Studio IAR",
    steps: [
      "One conversation",
      "One coordinated process",
      "One trusted team",
    ],
  },
} as const;

export const testimonial = {
  quote:
    "Studio IAR walked us through design and permits with patience and clarity. It felt personal the whole way — not like managing a dozen handoffs.",
  attribution: "Homeowners, Santa Barbara",
};

export const heroImage = "/work/santa-barbara-west-side-adu/kitchen.jpg";

export const servicesPreview = [
  {
    step: "01",
    title: "Feasibility",
    description:
      "Property review, zoning clarity, and budget guidance before you commit to drawings.",
    href: "/contact",
  },
  {
    step: "02",
    title: "Design coordination",
    description:
      "Thoughtful ADU design developed with licensed architects when architectural services are required.",
    href: "/services/adu-design",
  },
  {
    step: "03",
    title: "Consultant coordination",
    description:
      "Engineers, surveyors, and specialists brought in when the project needs them — without you managing the roster.",
    href: "/services/design-build",
  },
  {
    step: "04",
    title: "Permit coordination",
    description:
      "Submittals, revisions, and planner communication handled as one coordinated process.",
    href: "/services/permitting",
  },
  {
    step: "05",
    title: "Construction coordination",
    description:
      "Licensed California contractors perform the build. Studio IA coordinates according to your agreement.",
    href: "/services/adu-construction",
  },
  {
    step: "06",
    title: "Delivery",
    description:
      "Clear communication through completion — one point of contact to the finish.",
    href: "/services/design-build",
  },
] as const;

export const processSteps = [
  {
    title: "Consult",
    description: "We listen, assess feasibility, and define the right path.",
  },
  {
    title: "Design",
    description: "Plans take shape with coordinated design partners.",
  },
  {
    title: "Permit",
    description: "Submittals and responses are managed for you.",
  },
  {
    title: "Build",
    description: "Licensed contractors build; we keep the process coherent.",
  },
  {
    title: "Deliver",
    description: "Final coordination, handoff, and a finished ADU.",
  },
] as const;

export const aboutStats = [
  { value: "One team", label: "Single point of contact" },
  { value: "One process", label: "Coordinated from start to finish" },
  { value: "One ADU", label: "Thoughtfully designed & delivered" },
] as const;

export const whyStudioIA = {
  traditional: {
    label: "Traditional",
    steps: ["Architect", "Engineer", "Contractor", "You manage everyone"],
  },
  studio: {
    label: "Studio IA",
    steps: [
      "One conversation",
      "One coordinated process",
      "One trusted team",
    ],
  },
} as const;

export const testimonial = {
  quote:
    "Studio IA walked us through permits and design with patience and clarity. It felt personal the whole way — not like managing a dozen handoffs.",
  attribution: "Homeowners, Santa Barbara",
};

export const heroImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80";

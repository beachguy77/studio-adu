export type Project = {
  slug: string;
  title: string;
  location: string;
  locationSlug: string;
  scope: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  services: string[];
  stats: { label: string; value: string }[];
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: "goleta-coastal-cottage",
    title: "Coastal cottage ADU",
    location: "Goleta",
    locationSlug: "goleta",
    scope: "Full build",
    metaTitle: "Goleta Coastal Cottage ADU Case Study | Studio IA",
    metaDescription:
      "Case study: 650 sq ft detached ADU in Goleta — design through construction by Studio IA, with open living and a private patio.",
    summary:
      "A 650 sq ft detached ADU with open living, a full kitchen, and a private patio — designed and built for everyday comfort.",
    challenge:
      "The homeowners needed a flexible backyard unit for visiting family without overwhelming the primary residence or outdoor space.",
    approach:
      "We oriented the cottage for light and privacy, kept the footprint efficient, and coordinated permitting and construction as a continuous design-build path.",
    outcome:
      "A warm, independent living space that feels connected to the garden and finished with durable, calm materials.",
    services: ["Design-Build", "ADU Design", "ADU Construction", "Permitting"],
    stats: [
      { label: "Size", value: "650 sq ft" },
      { label: "Type", value: "Detached ADU" },
      { label: "Path", value: "Design-build" },
    ],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80",
    imageAlt:
      "Bright modern ADU living space with large windows — placeholder for Goleta coastal cottage project",
  },
  {
    slug: "santa-barbara-hillside-studio",
    title: "Hillside studio ADU",
    location: "Santa Barbara",
    locationSlug: "santa-barbara",
    scope: "Design & permits",
    metaTitle: "Santa Barbara Hillside Studio ADU Case Study | Studio IA",
    metaDescription:
      "Case study: compact hillside studio ADU in Santa Barbara — custom design and county plan submission by Studio IA.",
    summary:
      "A compact backyard studio designed for a hillside lot, with custom drawings and plan submission support.",
    challenge:
      "Limited flat area and privacy needs required a compact footprint and careful massing relative to the main house.",
    approach:
      "We developed a efficient studio plan, refined elevations for the hillside context, and managed permitting documentation for submission.",
    outcome:
      "A permit-oriented design package ready for the homeowners’ construction path — calm, compact, and site-specific.",
    services: ["ADU Design", "Permitting"],
    stats: [
      { label: "Type", value: "Studio ADU" },
      { label: "Scope", value: "Design & permits" },
      { label: "Setting", value: "Hillside" },
    ],
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=80",
    imageAlt:
      "Modern hillside home exterior with clean lines — placeholder for Santa Barbara studio ADU",
  },
  {
    slug: "carpinteria-garden-suite",
    title: "Garden guest suite",
    location: "Carpinteria",
    locationSlug: "carpinteria",
    scope: "Design only",
    metaTitle: "Carpinteria Garden Guest Suite ADU Case Study | Studio IA",
    metaDescription:
      "Case study: architectural design package for a Carpinteria garden guest suite ADU by Studio IA.",
    summary:
      "Architectural drawings and a design package for a garden-oriented guest suite — prepared for a client-managed build.",
    challenge:
      "The clients wanted a gracious guest suite that preserved garden space and could be built by their selected contractor.",
    approach:
      "We delivered a clear design package — plans, elevations, and material direction — coordinated for constructability and local expectations.",
    outcome:
      "A refined design-only engagement that gave the owners clarity and their builder a coherent set to execute.",
    services: ["ADU Design"],
    stats: [
      { label: "Scope", value: "Design only" },
      { label: "Use", value: "Guest suite" },
      { label: "Setting", value: "Garden lot" },
    ],
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd2e?w=1400&q=80",
    imageAlt:
      "Contemporary home with garden landscape — placeholder for Carpinteria guest suite ADU",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

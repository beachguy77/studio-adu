import type { FaqItem } from "@/lib/faqs";
import {
  consultingFaqs,
  constructionFaqs,
  coordinationFaqs,
  designBuildFaqs,
  designFaqs,
  garageFaqs,
  permittingFaqs,
  sourcingFaqs,
} from "@/lib/faqs";

export type ServicePage = {
  slug: string;
  name: string;
  shortName: string;
  serviceType: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  summary: string[];
  outcomes: string[];
  process: { title: string; description: string }[];
  faqs: FaqItem[];
  relatedSlugs: string[];
  category?: "interiors" | "adu";
};

export const services: ServicePage[] = [
  {
    slug: "interior-design-consulting",
    name: "Interior Design Consulting",
    shortName: "Design consulting",
    serviceType: "Interior Design Consulting",
    eyebrow: "Interiors",
    category: "interiors",
    title: "Interior design consulting for homes and hospitality",
    metaTitle: "Interior Design Consulting Santa Barbara | Studio IAR",
    metaDescription:
      "Studio IAR offers residential and hospitality interior design consulting in Santa Barbara — concepts, finishes, and spatial decisions with 15 years of industry experience.",
    lead: "Clear design direction for residential and hospitality spaces — from first concepts through finish decisions that feel intentional and livable.",
    summary: [
      "We begin with how you want the space to feel and function: a primary residence, a guest suite, a small hospitality project, or a renovation that needs a steadier hand.",
      "Fifteen years of interior design experience — including major hotels and restaurants — informs a process that balances beauty, budget, and constructability.",
    ],
    outcomes: [
      "Concept direction and spatial planning",
      "Finish and fixture recommendations",
      "Hospitality-caliber detail at residential scale",
      "A clear path into sourcing and coordination",
    ],
    process: [
      {
        title: "Discover",
        description: "Goals, lifestyle, brand cues, and constraints.",
      },
      {
        title: "Concept",
        description: "Mood, layout options, and material direction.",
      },
      {
        title: "Refine",
        description: "Selections and details ready for sourcing and build.",
      },
      {
        title: "Continue",
        description: "Move into sourcing, coordination, or ADU pathways as needed.",
      },
    ],
    faqs: consultingFaqs,
    relatedSlugs: ["material-sourcing", "project-coordination", "design-build"],
  },
  {
    slug: "material-sourcing",
    name: "Material Sourcing",
    shortName: "Material sourcing",
    serviceType: "Material Sourcing",
    eyebrow: "Interiors",
    category: "interiors",
    title: "Material sourcing with coherent lead times and finish",
    metaTitle: "Material Sourcing Santa Barbara | Studio IAR",
    metaDescription:
      "Studio IAR sources fixtures, surfaces, and furnishings for Santa Barbara residential and hospitality projects — aligned to design, budget, and schedule.",
    lead: "The right materials, ordered on time — so the design you approved is the design that gets installed.",
    summary: [
      "Sourcing is where beautiful boards become real rooms. We track finishes, furnishings, and specialty pieces so palette, price, and lead times stay coherent.",
      "Whether you need a focused procurement pass or ongoing selections through installation, we keep the client experience calm and clear.",
    ],
    outcomes: [
      "Curated finish and FF&E recommendations",
      "Budget-aware alternatives when needed",
      "Lead-time and order coordination",
      "Alignment with design and project schedule",
    ],
    process: [
      {
        title: "Define",
        description: "Confirm palette, performance needs, and budget range.",
      },
      {
        title: "Select",
        description: "Source fixtures, surfaces, and furnishings.",
      },
      {
        title: "Order",
        description: "Coordinate procurement and delivery windows.",
      },
      {
        title: "Install support",
        description: "Support review so what arrives matches the design intent.",
      },
    ],
    faqs: sourcingFaqs,
    relatedSlugs: [
      "interior-design-consulting",
      "project-coordination",
      "design-build",
    ],
  },
  {
    slug: "project-coordination",
    name: "Project Coordination",
    shortName: "Project coordination",
    serviceType: "Project Coordination",
    eyebrow: "Interiors",
    category: "interiors",
    title: "Project coordination for residential and hospitality work",
    metaTitle: "Project Coordination Santa Barbara | Studio IAR",
    metaDescription:
      "Studio IAR coordinates residential and hospitality projects in Santa Barbara — one point of contact across consultants, trades, and client decisions.",
    lead: "One trusted contact across designers, consultants, and trades — so you are not managing every handoff yourself.",
    summary: [
      "Complex interiors fail in the gaps between people. Studio IAR keeps sequencing, communication, and decisions coherent from kickoff through punch list.",
      "We collaborate with independently licensed professionals as the project requires — without claiming to be the architect or general contractor.",
    ],
    outcomes: [
      "Single point of client communication",
      "Aligned schedules and milestones",
      "Fewer redesign loops from miscommunication",
      "A calmer path to a finished space",
    ],
    process: [
      {
        title: "Align",
        description: "Scope, roles, and communication cadence.",
      },
      {
        title: "Coordinate",
        description: "Keep consultants and trades moving in one process.",
      },
      {
        title: "Track",
        description: "Milestones, issues, and client updates.",
      },
      {
        title: "Close",
        description: "Punch list support and a clear handoff.",
      },
    ],
    faqs: coordinationFaqs,
    relatedSlugs: [
      "interior-design-consulting",
      "material-sourcing",
      "design-build",
    ],
  },
  {
    slug: "adu-design",
    name: "ADU Design",
    shortName: "ADU design",
    serviceType: "ADU Design",
    eyebrow: "ADU specialty",
    category: "adu",
    title: "ADU design for Santa Barbara County homes",
    metaTitle: "ADU Design Santa Barbara | Studio IAR",
    metaDescription:
      "Thoughtful ADU design in Santa Barbara, Montecito, Goleta, and nearby cities — floor plans, elevations, and permit-minded drawings with a human touch.",
    lead: "Clear, beautiful plans shaped for your lot, lifestyle, and local requirements — whether you need concepts or a permit-ready set.",
    summary: [
      "ADU coordination is a Studio IAR specialty. We begin with how you want to live: guest suite, rental income, multigenerational housing, or a quiet studio.",
      "Every drawing path is prepared with Santa Barbara County permitting realities in mind, collaborating with licensed architects when architectural services are required.",
    ],
    outcomes: [
      "Site-responsive concepts and floor plans",
      "Elevations and material direction",
      "Coordination toward permit-ready drawings",
      "À la carte or full ADU journey continuity",
    ],
    process: [
      {
        title: "Listen & assess",
        description:
          "Goals, budget range, site constraints, and jurisdiction requirements.",
      },
      {
        title: "Concept",
        description:
          "Layout options that balance light, privacy, and outdoor connection.",
      },
      {
        title: "Develop",
        description:
          "Refined plans and elevations ready for review and next steps.",
      },
      {
        title: "Handoff or continue",
        description:
          "Deliver drawings — or continue into permit and construction coordination with us.",
      },
    ],
    faqs: designFaqs,
    relatedSlugs: [
      "permitting",
      "design-build",
      "adu-construction",
      "interior-design-consulting",
    ],
  },
  {
    slug: "adu-construction",
    name: "Construction Coordination",
    shortName: "Construction coordination",
    serviceType: "ADU Construction Coordination",
    eyebrow: "ADU specialty",
    category: "adu",
    title: "ADU construction coordination in Santa Barbara County",
    metaTitle: "ADU Construction Coordination Santa Barbara | Studio IAR",
    metaDescription:
      "Studio IAR coordinates ADU construction with licensed California contractors — clear communication and a managed process from groundbreaking through completion.",
    lead: "Licensed California contractors perform the build. Studio IAR coordinates the project according to your agreement — so you have one trusted point of contact.",
    summary: [
      "Construction is where drawings become a place people live. We keep sequencing, inspections, and client communication coherent while licensed builders execute the work.",
      "Whether you arrive with Studio IAR–coordinated plans or another designer’s set, we begin with a readiness review so surprises surface early.",
    ],
    outcomes: [
      "Coordination with licensed general contractors",
      "Clear updates through the build",
      "Inspection and milestone alignment",
      "One point of contact through completion",
    ],
    process: [
      {
        title: "Preconstruction",
        description: "Scope alignment, schedule outline, and site logistics.",
      },
      {
        title: "Build",
        description: "Licensed contractors build; we keep the process coordinated.",
      },
      {
        title: "Inspect",
        description: "Milestone tracking and punch-list coordination.",
      },
      {
        title: "Handoff",
        description: "Walkthrough support, documentation, and delivery.",
      },
    ],
    faqs: constructionFaqs,
    relatedSlugs: ["design-build", "adu-design", "permitting", "project-coordination"],
  },
  {
    slug: "garage-conversion",
    name: "Garage Conversion",
    shortName: "Garage conversion",
    serviceType: "Garage Conversion ADU",
    eyebrow: "ADU specialty",
    category: "adu",
    title: "Garage-to-ADU conversions",
    metaTitle: "Garage Conversion ADU Santa Barbara | Studio IAR",
    metaDescription:
      "Garage conversion ADUs in Santa Barbara County — feasibility, design coordination, permit coordination, and construction coordination by Studio IAR.",
    lead: "Reuse what you have. We evaluate structure, egress, utilities, and parking — then coordinate a conversion that feels like a true home, not a compromise.",
    summary: [
      "Garage conversions can be an efficient path when detached new construction is constrained by coverage, setbacks, or budget. Success depends on solving comfort, light, and code early.",
      "Studio IAR guides feasibility through design and, if you choose, permit and construction coordination with licensed professionals.",
    ],
    outcomes: [
      "Feasibility for structure, insulation, and egress",
      "Parking and site circulation solutions",
      "Warm, livable interior planning",
      "Permit and construction coordination as needed",
    ],
    process: [
      {
        title: "Evaluate",
        description: "Structure, slab, utilities, and parking rules.",
      },
      {
        title: "Design",
        description: "Plan a bright, code-aware living layout.",
      },
      {
        title: "Permit",
        description: "Coordinate conversion drawings and submittals.",
      },
      {
        title: "Deliver",
        description: "Coordinate licensed contractors through completion.",
      },
    ],
    faqs: garageFaqs,
    relatedSlugs: ["adu-design", "permitting", "adu-construction"],
  },
  {
    slug: "design-build",
    name: "ADU Full Journey",
    shortName: "ADU full journey",
    serviceType: "ADU Design & Project Coordination",
    eyebrow: "ADU specialty",
    category: "adu",
    title: "One team from ADU feasibility to delivery",
    metaTitle: "ADU Design & Project Coordination Santa Barbara | Studio IAR",
    metaDescription:
      "Studio IAR coordinates ADU design, permitting, and construction with licensed partners in Santa Barbara County — one point of contact, fewer handoffs.",
    lead: "One conversation. One coordinated process. One trusted team — from first feasibility talk through a carefully managed ADU delivery.",
    summary: [
      "This path suits homeowners who want continuity without managing every firm themselves. Studio IAR coordinates licensed architects, consultants, and contractors into one experience.",
      "It remains flexible: begin with consultation and expand into the full journey when ready — or pair ADU work with our broader interior consulting and sourcing.",
    ],
    outcomes: [
      "Single point of contact across phases",
      "Fewer redesign loops and handoff gaps",
      "Budget-aware decisions earlier",
      "A calmer, more human client experience",
    ],
    process: [
      {
        title: "Consult",
        description: "Feasibility, goals, and service path.",
      },
      {
        title: "Design",
        description: "Coordinated design with licensed partners as needed.",
      },
      {
        title: "Permit",
        description: "Submittals and revisions managed for you.",
      },
      {
        title: "Deliver",
        description: "Construction coordination through handoff.",
      },
    ],
    faqs: designBuildFaqs,
    relatedSlugs: [
      "adu-design",
      "adu-construction",
      "permitting",
      "interior-design-consulting",
    ],
  },
  {
    slug: "permitting",
    name: "Permit Coordination",
    shortName: "Permit coordination",
    serviceType: "ADU Permit Coordination",
    eyebrow: "ADU specialty",
    category: "adu",
    title: "ADU permit coordination for Santa Barbara County",
    metaTitle: "ADU Permit Coordination Santa Barbara County | Studio IAR",
    metaDescription:
      "ADU permit coordination in Santa Barbara, Goleta, Carpinteria, and nearby cities — submittals, revisions, and planner communication.",
    lead: "Permitting should not be a second job. We coordinate submissions, track comments, and manage revisions so your project keeps moving.",
    summary: [
      "Local ADU rules differ by city and county context. Our permit coordination is grounded in completeness, clarity, and responsive plan-check communication.",
      "Pair permitting with our design services, or engage us to steward drawings prepared elsewhere after a readiness review.",
    ],
    outcomes: [
      "Permit package coordination",
      "City/county submittals and tracking",
      "Plan-check response management",
      "Clear updates while you wait",
    ],
    process: [
      {
        title: "Package",
        description: "Confirm drawings and required forms.",
      },
      {
        title: "Submit",
        description: "File with the correct jurisdiction.",
      },
      {
        title: "Respond",
        description: "Address comments thoroughly and promptly.",
      },
      {
        title: "Approve",
        description: "Secure permits and prepare for construction coordination.",
      },
    ],
    faqs: permittingFaqs,
    relatedSlugs: ["adu-design", "design-build", "adu-construction"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slugs: string[]) {
  return slugs
    .map((slug) => getService(slug))
    .filter((service): service is ServicePage => Boolean(service));
}

export function getServicesByCategory(category: "interiors" | "adu") {
  return services.filter((service) => service.category === category);
}

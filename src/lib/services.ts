import type { FaqItem } from "@/lib/faqs";
import {
  constructionFaqs,
  designBuildFaqs,
  designFaqs,
  garageFaqs,
  permittingFaqs,
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
};

export const services: ServicePage[] = [
  {
    slug: "adu-design",
    name: "ADU Design",
    shortName: "Design",
    serviceType: "ADU Design",
    eyebrow: "Design services",
    title: "ADU design for Santa Barbara County homes",
    metaTitle: "ADU Design Santa Barbara | Studio IA",
    metaDescription:
      "Thoughtful ADU design in Santa Barbara, Montecito, Goleta, and nearby cities — floor plans, elevations, and permit-minded drawings with a human touch.",
    lead: "Clear, beautiful plans shaped for your lot, lifestyle, and local requirements — whether you need concepts or a permit-ready set.",
    summary: [
      "We begin with how you want to live: guest suite, rental income, multigenerational housing, or a quiet studio. Then we translate that into a design that fits setbacks, views, privacy, and the character of your property.",
      "Every drawing is prepared with Santa Barbara County permitting realities in mind, so beauty and buildability move together.",
    ],
    outcomes: [
      "Site-responsive concepts and floor plans",
      "Elevations and material direction",
      "Coordination toward permit-ready drawings",
      "À la carte or full design-build continuity",
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
    relatedSlugs: ["permitting", "design-build", "adu-construction"],
  },
  {
    slug: "adu-construction",
    name: "Construction Coordination",
    shortName: "Construction coordination",
    serviceType: "ADU Construction Coordination",
    eyebrow: "Construction coordination",
    title: "ADU construction coordination in Santa Barbara County",
    metaTitle: "ADU Construction Coordination Santa Barbara | Studio IA",
    metaDescription:
      "Studio IA coordinates ADU construction with licensed California contractors — clear communication and a managed process from groundbreaking through completion.",
    lead: "Licensed California contractors perform the build. Studio IA coordinates the project according to your agreement — so you have one trusted point of contact.",
    summary: [
      "Construction is where drawings become a place people live. We keep sequencing, inspections, and client communication coherent while licensed builders execute the work.",
      "Whether you arrive with Studio IA–coordinated plans or another designer’s set, we begin with a readiness review so surprises surface early.",
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
    relatedSlugs: ["design-build", "adu-design", "permitting"],
  },
  {
    slug: "garage-conversion",
    name: "Garage Conversion",
    shortName: "Garage conversion",
    serviceType: "Garage Conversion ADU",
    eyebrow: "Conversions",
    title: "Garage-to-ADU conversions",
    metaTitle: "Garage Conversion ADU Santa Barbara | Studio IA",
    metaDescription:
      "Garage conversion ADUs in Santa Barbara County — feasibility, design coordination, permit coordination, and construction coordination by Studio IA.",
    lead: "Reuse what you have. We evaluate structure, egress, utilities, and parking — then coordinate a conversion that feels like a true home, not a compromise.",
    summary: [
      "Garage conversions can be an efficient path when detached new construction is constrained by coverage, setbacks, or budget. Success depends on solving comfort, light, and code early.",
      "Studio IA guides feasibility through design and, if you choose, permit and construction coordination with licensed professionals.",
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
    name: "Full Journey",
    shortName: "Full journey",
    serviceType: "ADU Design & Project Coordination",
    eyebrow: "Full journey",
    title: "One team from feasibility to delivery",
    metaTitle: "ADU Design & Project Coordination Santa Barbara | Studio IA",
    metaDescription:
      "Studio IA coordinates ADU design, permitting, and construction with licensed partners in Santa Barbara County — one point of contact, fewer handoffs.",
    lead: "One conversation. One coordinated process. One trusted team — from first feasibility talk through a beautifully managed delivery.",
    summary: [
      "This path suits homeowners who want continuity without managing every firm themselves. Studio IA coordinates licensed architects, consultants, and contractors into one experience.",
      "It remains flexible: begin with consultation and expand into the full journey when ready.",
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
    relatedSlugs: ["adu-design", "adu-construction", "permitting"],
  },
  {
    slug: "permitting",
    name: "Permit Coordination",
    shortName: "Permit coordination",
    serviceType: "ADU Permit Coordination",
    eyebrow: "Permits",
    title: "ADU permit coordination for Santa Barbara County",
    metaTitle: "ADU Permit Coordination Santa Barbara County | Studio IA",
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

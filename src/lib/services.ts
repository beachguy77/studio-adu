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
          "Deliver drawings — or continue into permitting and construction with us.",
      },
    ],
    faqs: designFaqs,
    relatedSlugs: ["permitting", "design-build", "adu-construction"],
  },
  {
    slug: "adu-construction",
    name: "ADU Construction",
    shortName: "Construction",
    serviceType: "ADU Construction",
    eyebrow: "Construction",
    title: "ADU construction with careful craft",
    metaTitle: "ADU Construction Santa Barbara | Studio IA",
    metaDescription:
      "ADU construction in Santa Barbara County — quality build management from foundation to finishes, with clear communication and local expertise.",
    lead: "From groundbreaking to final inspection, we manage the build with the same care we bring to design — so the finished ADU feels intentional, not rushed.",
    summary: [
      "Construction is where drawings become a place people live. We coordinate trades, sequencing, and inspections with transparent updates — protecting quality and timeline.",
      "Whether you arrive with Studio IA plans or another designer’s set, we start with a constructability review so surprises surface early.",
    ],
    outcomes: [
      "Build management from foundation through finishes",
      "Trade coordination and inspection readiness",
      "Quality-focused detailing and site care",
      "Clear communication through completion",
    ],
    process: [
      {
        title: "Preconstruction",
        description: "Estimate, schedule outline, and site logistics.",
      },
      {
        title: "Build",
        description: "Structure, systems, weatherproofing, and finishes.",
      },
      {
        title: "Inspect",
        description: "Milestone inspections and punch-list resolution.",
      },
      {
        title: "Handoff",
        description: "Walkthrough, documentation, and keys.",
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
      "Convert a garage into a livable ADU in Santa Barbara County. Design, permitting guidance, and construction for garage conversion projects.",
    lead: "Reuse what you have. We evaluate structure, egress, utilities, and parking — then design a conversion that feels like a true home, not a compromise.",
    summary: [
      "Garage conversions can be an efficient path when detached new construction is constrained by coverage, setbacks, or budget. Success depends on solving comfort, light, and code early.",
      "Studio IA guides feasibility through design and, if you choose, permitting and build.",
    ],
    outcomes: [
      "Feasibility for structure, insulation, and egress",
      "Parking and site circulation solutions",
      "Warm, livable interior planning",
      "Permit and construction support as needed",
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
        description: "Prepare and submit conversion drawings.",
      },
      {
        title: "Transform",
        description: "Build out insulation, systems, and finishes.",
      },
    ],
    faqs: garageFaqs,
    relatedSlugs: ["adu-design", "permitting", "adu-construction"],
  },
  {
    slug: "design-build",
    name: "Design-Build",
    shortName: "Design-build",
    serviceType: "ADU Design-Build",
    eyebrow: "Full journey",
    title: "ADU design-build, start to finish",
    metaTitle: "ADU Design-Build Santa Barbara | Studio IA",
    metaDescription:
      "One Studio IA team for ADU design, permitting, and construction in Santa Barbara County — fewer handoffs, clearer accountability, human-centered process.",
    lead: "One relationship from first sketch to keys in hand. Design decisions stay connected to cost, constructability, and permitting — so the path stays coherent.",
    summary: [
      "Design-build suits homeowners who want continuity and a single point of accountability. You still choose how involved you want to be; we simply remove the seams between phases.",
      "It is also flexible: you can begin with consultation and expand into the full journey when ready.",
    ],
    outcomes: [
      "Single team across design, permits, and build",
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
        description: "Plans informed by build and permit realities.",
      },
      {
        title: "Permit",
        description: "Submittals and revisions managed for you.",
      },
      {
        title: "Build & complete",
        description: "Construction through final inspection and handoff.",
      },
    ],
    faqs: designBuildFaqs,
    relatedSlugs: ["adu-design", "adu-construction", "permitting"],
  },
  {
    slug: "permitting",
    name: "Permitting",
    shortName: "Permitting",
    serviceType: "ADU Permitting",
    eyebrow: "Permits",
    title: "ADU permitting for Santa Barbara County",
    metaTitle: "ADU Permitting Santa Barbara County | Studio IA",
    metaDescription:
      "ADU plan submission and permitting support in Santa Barbara, Goleta, Carpinteria, and nearby cities — submittals, revisions, and planner coordination.",
    lead: "Permitting should not be a second job. We prepare submissions, track comments, and coordinate revisions so your project keeps moving.",
    summary: [
      "Local ADU rules differ by city and county context. Our permitting support is grounded in how reviewers actually evaluate plan sets — completeness, clarity, and responsiveness.",
      "Pair permitting with our design services, or engage us to steward drawings prepared elsewhere after a readiness review.",
    ],
    outcomes: [
      "Permit-ready package coordination",
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
        description: "Secure permits and prepare for build.",
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

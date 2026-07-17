import type { FaqItem } from "@/lib/faqs";

export type LocationPage = {
  slug: string;
  name: string;
  regionLabel: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  overview: string[];
  localNotes: string[];
  faqs: FaqItem[];
  nearby: string[];
};

export const locations: LocationPage[] = [
  {
    slug: "santa-barbara",
    name: "Santa Barbara",
    regionLabel: "City of Santa Barbara & surrounds",
    metaTitle: "Santa Barbara ADU Design & Project Management | Studio IA",
    metaDescription:
      "Studio IA is Santa Barbara’s premium ADU design and project management studio — one point of contact for design, permitting, and construction coordination.",
    title: "Santa Barbara ADU design & project management",
    lead: "Thoughtful accessory dwelling units for Santa Barbara homeowners — guided by one trusted team from feasibility through a carefully coordinated delivery.",
    overview: [
      "Santa Barbara ADU projects often navigate compact lots, historic context, parking considerations, and a permitting path that rewards clear, complete drawings. Studio IA brings design judgment and local process fluency together.",
      "Whether you want a garden studio, a rental unit, or space for family, we coordinate design, permitting, and licensed builders — or the phases you need — without asking you to manage every firm yourself.",
    ],
    localNotes: [
      "City vs. county jurisdiction can change requirements — we confirm early.",
      "Hillside and view lots need careful massing and privacy planning.",
      "Garage conversions are often strong options on constrained lots.",
    ],
    faqs: [
      {
        question: "Do you offer ADU project management in Santa Barbara?",
        answer:
          "Yes. Studio IA provides design coordination, permit coordination, and construction coordination with licensed professionals for Santa Barbara homeowners.",
      },
      {
        question: "Can Studio IA help with Santa Barbara ADU permits?",
        answer:
          "Yes. We coordinate plan submissions and revisions so you are not left translating plan-check comments alone.",
      },
    ],
    nearby: ["montecito", "goleta", "summerland", "carpinteria"],
  },
  {
    slug: "montecito",
    name: "Montecito",
    regionLabel: "Montecito",
    metaTitle: "Montecito ADU Design | Studio IA",
    metaDescription:
      "Premium Montecito ADU design and project coordination — discreet, site-sensitive guest suites and studios with one point of contact.",
    title: "Montecito ADU design & coordination",
    lead: "Discreet, site-sensitive ADUs that complement estate landscapes, privacy, and architecture — designed with care for how the land already speaks.",
    overview: [
      "Montecito projects ask for restraint and craft: privacy, topography, vegetation, and architectural continuity matter as much as square footage.",
      "Studio IA focuses on human-scale guest suites and studios, coordinating licensed professionals into one premium homeowner experience.",
    ],
    localNotes: [
      "Site access, grading, and vegetation often shape feasibility.",
      "Privacy and neighbor adjacency deserve early design attention.",
      "High-finish material selections can be coordinated through the full journey.",
    ],
    faqs: [
      {
        question: "Can you design a guest ADU on a Montecito estate lot?",
        answer:
          "Yes. We specialize in thoughtful placement, privacy, and architectural continuity for guest suites and studios on larger Montecito properties.",
      },
    ],
    nearby: ["santa-barbara", "summerland", "carpinteria"],
  },
  {
    slug: "goleta",
    name: "Goleta",
    regionLabel: "Goleta",
    metaTitle: "Goleta ADU Design & Project Management | Studio IA",
    metaDescription:
      "Goleta ADU design, permit coordination, and construction coordination — detached units, garage conversions, and full-journey project management by Studio IA.",
    title: "Goleta ADU services",
    lead: "Practical, well-crafted ADUs for Goleta homeowners — from backyard cottages to garage conversions — guided through design and local permitting.",
    overview: [
      "Goleta’s mix of neighborhoods and lot types makes ADUs a strong fit for multigenerational living and flexible income. We help clarify what your lot supports before drawings deepen.",
      "Engage us for design coordination, permitting, construction coordination, or the full path.",
    ],
    localNotes: [
      "Confirm city requirements early for smoother plan check.",
      "Utility connections and setbacks often drive layout choices.",
      "Conversions and detached units both remain common options.",
    ],
    faqs: [
      {
        question: "Do you handle Goleta ADU permits?",
        answer:
          "Yes. We coordinate plan preparation, submission, and responses for Goleta ADU projects.",
      },
    ],
    nearby: ["santa-barbara", "carpinteria", "ventura"],
  },
  {
    slug: "carpinteria",
    name: "Carpinteria",
    regionLabel: "Carpinteria",
    metaTitle: "Carpinteria ADU Design | Studio IA",
    metaDescription:
      "Carpinteria ADU design and project coordination — coastal-conscious planning, permit support, and a single trusted point of contact.",
    title: "Carpinteria ADU design & coordination",
    lead: "Coastal community ADUs designed for light, outdoor living, and a calm permitting path — with Studio IA’s full or à la carte services.",
    overview: [
      "Carpinteria projects benefit from clear early feasibility: coastal influences, lot coverage, and neighborhood scale all inform the right ADU type.",
      "We keep the process human — explaining options without pressure — while coordinating licensed partners as needed.",
    ],
    localNotes: [
      "Coastal and local guidelines may shape materials and siting.",
      "Outdoor rooms and indoor-outdoor flow are frequent design goals.",
      "Garage conversions can unlock value on smaller lots.",
    ],
    faqs: [
      {
        question: "Can Studio IA coordinate a Carpinteria ADU from design through delivery?",
        answer:
          "Yes. Our full journey covers design coordination, permitting, and construction coordination with licensed contractors — or you can engage individual phases.",
      },
    ],
    nearby: ["summerland", "montecito", "santa-barbara", "ventura"],
  },
  {
    slug: "summerland",
    name: "Summerland",
    regionLabel: "Summerland",
    metaTitle: "Summerland ADU Design | Studio IA",
    metaDescription:
      "Studio IA provides ADU design and project coordination for Summerland homeowners seeking thoughtful backyard units.",
    title: "Summerland ADU design & coordination",
    lead: "Small-community projects deserve careful scale. We design ADUs that feel native to Summerland’s coastal character.",
    overview: [
      "Summerland lots often reward compact, well-proportioned ADUs. We prioritize siting, light, and neighborly presence.",
      "Local process and site constraints are mapped before design advances.",
    ],
    localNotes: [
      "Scale and street presence matter in a small coastal community.",
      "Confirm jurisdiction and coastal considerations early.",
      "A coordinated journey keeps detailing consistent through delivery.",
    ],
    faqs: [
      {
        question: "Is Summerland in your service area?",
        answer:
          "Yes. Studio IA serves Summerland alongside Santa Barbara, Montecito, Carpinteria, and nearby communities.",
      },
    ],
    nearby: ["montecito", "carpinteria", "santa-barbara"],
  },
  {
    slug: "ventura",
    name: "Ventura",
    regionLabel: "Ventura",
    metaTitle: "Ventura ADU Design | Studio IA",
    metaDescription:
      "ADU design and project coordination in Ventura — Studio IA brings Santa Barbara County expertise to nearby Ventura projects.",
    title: "Ventura ADU services",
    lead: "Nearby Ventura homeowners can work with Studio IA for ADU design, permit coordination, and construction coordination — with the same human-centered process.",
    overview: [
      "Ventura’s neighborhoods offer strong ADU potential for family and rental uses. We clarify feasibility, then shape a design-led path for how you will actually use the space.",
      "Ask us about design-only or full-journey engagements.",
    ],
    localNotes: [
      "Local permitting rules differ from Santa Barbara County — we plan accordingly.",
      "Lot type and parking often influence detached vs. conversion choices.",
      "Clear communication remains central to our process.",
    ],
    faqs: [
      {
        question: "Do you take ADU projects in Ventura?",
        answer:
          "Yes. Ventura is within our service area for ADU design, permitting support, and construction coordination.",
      },
    ],
    nearby: ["carpinteria", "goleta", "santa-barbara"],
  },
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}

export function getNearbyLocations(slugs: string[]) {
  return slugs
    .map((slug) => getLocation(slug))
    .filter((location): location is LocationPage => Boolean(location));
}

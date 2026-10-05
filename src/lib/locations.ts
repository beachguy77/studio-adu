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
    metaTitle: "Santa Barbara ADU Coordination | Studio IAR",
    metaDescription:
      "Studio IAR is a Santa Barbara interior design studio with a local specialty in ADU coordination — design, permitting, and construction coordination with licensed partners.",
    title: "Santa Barbara ADU coordination",
    lead: "Thoughtful accessory dwelling units for Santa Barbara homeowners — guided by Studio IAR’s interiors practice and one trusted coordination path.",
    overview: [
      "Studio IAR is based in Santa Barbara. Beyond ADUs, we offer interior design consulting, material sourcing, and project coordination for residential and hospitality work.",
      "Santa Barbara ADU projects often navigate compact lots, historic context, parking considerations, and a permitting path that rewards clear, complete drawings. We bring design judgment and local process fluency together with licensed partners.",
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
          "Yes. Studio IAR provides design coordination, permit coordination, and construction coordination with licensed professionals for Santa Barbara homeowners — as a specialty within our interiors practice.",
      },
      {
        question: "Can Studio IAR help with Santa Barbara ADU permits?",
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
    metaTitle: "Montecito ADU Design | Studio IAR",
    metaDescription:
      "Premium Montecito ADU design and project coordination by Studio IAR — discreet, site-sensitive guest suites and studios with one point of contact.",
    title: "Montecito ADU design & coordination",
    lead: "Discreet, site-sensitive ADUs that complement estate landscapes, privacy, and architecture — coordinated with Studio IAR’s interiors standard of care.",
    overview: [
      "Montecito projects ask for restraint and craft: privacy, topography, vegetation, and architectural continuity matter as much as square footage.",
      "Studio IAR focuses on human-scale guest suites and studios, coordinating licensed professionals into one premium homeowner experience — alongside our broader consulting and sourcing work.",
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
    metaTitle: "Goleta ADU Design & Coordination | Studio IAR",
    metaDescription:
      "Goleta ADU design, permit coordination, and construction coordination by Studio IAR — detached units, garage conversions, and full-journey project coordination.",
    title: "Goleta ADU services",
    lead: "Practical, well-crafted ADUs for Goleta and Noleta homeowners — guided through design and local permitting by Studio IAR.",
    overview: [
      "Goleta’s mix of neighborhoods and lot types makes ADUs a strong fit for multigenerational living and flexible income. We help clarify what your lot supports before drawings deepen.",
      "Engage us for design coordination, permitting, construction coordination, or the full path — or for interiors consulting beyond ADUs.",
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
    metaTitle: "Carpinteria ADU Design | Studio IAR",
    metaDescription:
      "Carpinteria ADU design and project coordination — coastal-conscious planning, permit support, and a single trusted point of contact with Studio IAR.",
    title: "Carpinteria ADU design & coordination",
    lead: "Coastal community ADUs designed for light, outdoor living, and a calm permitting path — with Studio IAR’s full or à la carte services.",
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
        question: "Can Studio IAR coordinate a Carpinteria ADU from design through delivery?",
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
    metaTitle: "Summerland ADU Design | Studio IAR",
    metaDescription:
      "Studio IAR provides ADU design and project coordination for Summerland homeowners seeking thoughtful backyard units.",
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
          "Yes. Studio IAR serves Summerland alongside Santa Barbara, Montecito, Carpinteria, and nearby communities.",
      },
    ],
    nearby: ["montecito", "carpinteria", "santa-barbara"],
  },
  {
    slug: "ventura",
    name: "Ventura",
    regionLabel: "Ventura",
    metaTitle: "Ventura ADU Design | Studio IAR",
    metaDescription:
      "ADU design and project coordination in Ventura — Studio IAR brings Santa Barbara County expertise to nearby Ventura projects.",
    title: "Ventura ADU services",
    lead: "Nearby Ventura homeowners can work with Studio IAR for ADU design, permit coordination, and construction coordination — with the same human-centered process.",
    overview: [
      "Ventura’s neighborhoods offer strong ADU potential for family and rental uses. We clarify feasibility, then shape a design-led path for how you will actually use the space.",
      "Ask us about design-only or full-journey engagements — or interiors consulting beyond ADUs.",
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

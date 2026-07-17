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
    metaTitle: "ADU Design & Construction Santa Barbara | Studio IA",
    metaDescription:
      "Studio IA designs and builds ADUs in Santa Barbara — design, permitting, garage conversions, and construction with a human touch.",
    title: "ADU design & construction in Santa Barbara",
    lead: "From Riviera hillsides to the Westside, we help Santa Barbara homeowners add thoughtful accessory dwelling units that respect neighborhood character and local process.",
    overview: [
      "Santa Barbara ADU projects often navigate compact lots, historic context, parking considerations, and a permitting path that rewards clear, complete drawings. Studio IA brings design judgment and local process fluency together.",
      "Whether you want a garden studio, a rental unit, or space for family, we offer design, permitting support, construction, or a full design-build journey.",
    ],
    localNotes: [
      "City vs. county jurisdiction can change requirements — we confirm early.",
      "Hillside and view lots need careful massing and privacy planning.",
      "Garage conversions are often strong options on constrained lots.",
    ],
    faqs: [
      {
        question: "Do you build ADUs in the City of Santa Barbara?",
        answer:
          "Yes. We provide ADU design, permitting support, and construction services for Santa Barbara homeowners, including à la carte and design-build paths.",
      },
      {
        question: "Can Studio IA help with Santa Barbara ADU permits?",
        answer:
          "Yes. We prepare and manage plan submissions and revisions so you are not left translating plan-check comments alone.",
      },
    ],
    nearby: ["montecito", "goleta", "summerland", "carpinteria"],
  },
  {
    slug: "montecito",
    name: "Montecito",
    regionLabel: "Montecito",
    metaTitle: "ADU Design Montecito | Studio IA",
    metaDescription:
      "Premium ADU design and construction for Montecito properties — discreet, site-sensitive studios and guest suites by Studio IA.",
    title: "ADUs for Montecito properties",
    lead: "Discreet, site-sensitive ADUs that complement estate landscapes, privacy, and architecture — designed with care for how the land already speaks.",
    overview: [
      "Montecito projects ask for restraint and craft: privacy, topography, vegetation, and architectural continuity matter as much as square footage.",
      "Studio IA focuses on human-scale guest suites and studios that feel intentional within the larger property composition.",
    ],
    localNotes: [
      "Site access, grading, and vegetation often shape feasibility.",
      "Privacy and neighbor adjacency deserve early design attention.",
      "High-finish material selections can be coordinated through design-build.",
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
    metaTitle: "ADU Construction Goleta | Studio IA",
    metaDescription:
      "ADU design, permitting, and construction in Goleta — detached units, garage conversions, and design-build by Studio IA.",
    title: "ADU services in Goleta",
    lead: "Practical, well-crafted ADUs for Goleta homeowners — from backyard cottages to garage conversions — guided through design and local permitting.",
    overview: [
      "Goleta’s mix of neighborhoods and lot types makes ADUs a strong fit for multigenerational living and flexible income. We help clarify what your lot supports before drawings deepen.",
      "Engage us for design only, permitting, construction, or the full path.",
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
          "Yes. We support plan preparation, submission, and responses for Goleta ADU projects.",
      },
    ],
    nearby: ["santa-barbara", "carpinteria", "ventura"],
  },
  {
    slug: "carpinteria",
    name: "Carpinteria",
    regionLabel: "Carpinteria",
    metaTitle: "ADU Design & Build Carpinteria | Studio IA",
    metaDescription:
      "ADU design and construction in Carpinteria — coastal-conscious planning, permitting support, and human-centered design-build.",
    title: "ADUs in Carpinteria",
    lead: "Coastal community ADUs designed for light, outdoor living, and a calm permitting path — with Studio IA’s full or à la carte services.",
    overview: [
      "Carpinteria projects benefit from clear early feasibility: coastal influences, lot coverage, and neighborhood scale all inform the right ADU type.",
      "We keep the process human — explaining options without pressure.",
    ],
    localNotes: [
      "Coastal and local guidelines may shape materials and siting.",
      "Outdoor rooms and indoor-outdoor flow are frequent design goals.",
      "Garage conversions can unlock value on smaller lots.",
    ],
    faqs: [
      {
        question: "Can Studio IA manage a Carpinteria ADU from design to build?",
        answer:
          "Yes. Our design-build path covers design, permitting coordination, and construction, or you can hire for individual phases.",
      },
    ],
    nearby: ["summerland", "montecito", "santa-barbara", "ventura"],
  },
  {
    slug: "summerland",
    name: "Summerland",
    regionLabel: "Summerland",
    metaTitle: "ADU Builder Summerland | Studio IA",
    metaDescription:
      "Studio IA provides ADU design, permitting, and construction support for Summerland homeowners seeking thoughtful backyard units.",
    title: "ADU design & construction in Summerland",
    lead: "Small-community projects deserve careful scale. We design ADUs that feel native to Summerland’s coastal character.",
    overview: [
      "Summerland lots often reward compact, well-proportioned ADUs. We prioritize siting, light, and neighborly presence.",
      "Local process and site constraints are mapped before design advances.",
    ],
    localNotes: [
      "Scale and street presence matter in a small coastal community.",
      "Confirm jurisdiction and coastal considerations early.",
      "Design-build keeps detailing consistent through construction.",
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
    metaTitle: "ADU Design Ventura | Studio IA",
    metaDescription:
      "ADU design and construction support in Ventura — Studio IA brings Santa Barbara County expertise to nearby Ventura projects.",
    title: "ADU services in Ventura",
    lead: "Nearby Ventura homeowners can work with Studio IA for ADU design, permitting coordination, and construction — with the same human-centered process.",
    overview: [
      "Ventura’s neighborhoods offer strong ADU potential for family and rental uses. We clarify feasibility, then design for how you will actually use the space.",
      "Ask us about design-only or full design-build engagements.",
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
          "Yes. Ventura is within our service area for ADU design, permitting support, and construction services.",
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

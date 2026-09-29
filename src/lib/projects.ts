export type ProjectImage = {
  src: string;
  alt: string;
};

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
  gallery?: ProjectImage[];
  video?: {
    src: string;
    poster?: string;
    caption?: string;
  };
};

const westSideGallery: ProjectImage[] = [
  {
    src: "/work/santa-barbara-west-side-adu/kitchen.jpg",
    alt: "Kitchen corner with dark teal counters, sage zellige backsplash, chrome faucet, and a gingham curtain under the sink",
  },
  {
    src: "/work/santa-barbara-west-side-adu/refrigerator.jpg",
    alt: "Mint vintage Classic refrigerator with chrome handles beside a sage-trimmed door and lace curtain",
  },
  {
    src: "/work/santa-barbara-west-side-adu/pink-door.jpg",
    alt: "Dusty-pink multi-pane door with lace cafe curtains reflecting Santa Barbara sky and palms",
  },
  {
    src: "/work/santa-barbara-west-side-adu/pink-sink.jpg",
    alt: "Dusty-pink porcelain console sink with polished chrome legs, cross-handle faucet, and octagonal mirror",
  },
  {
    src: "/work/santa-barbara-west-side-adu/shower.jpg",
    alt: "Deep teal zellige shower with chrome showerhead, white ceramic lever handles, and a tiled niche",
  },
  {
    src: "/work/santa-barbara-west-side-adu/tub.jpg",
    alt: "White bathtub-shower with glossy teal tile, chrome fixtures, and a recessed niche",
  },
];

export const projects: Project[] = [
  {
    slug: "santa-barbara-west-side-adu",
    title: "Santa Barbara West Side ADU",
    location: "Santa Barbara",
    locationSlug: "santa-barbara",
    scope: "Completed ADU",
    metaTitle: "Santa Barbara West Side ADU | Studio IA",
    metaDescription:
      "A West Side Santa Barbara ADU finished in color, chrome, and custom pieces — dusty-pink porcelain, a mint Classic refrigerator, sage tile, and a deep teal shower.",
    summary:
      "A West Side Santa Barbara ADU finished in color, chrome, and custom pieces — dusty-pink porcelain, a mint Classic refrigerator, sage tile, and a deep teal shower.",
    challenge:
      "The homeowners wanted a compact ADU that felt personal rather than generic — a place with character, craft, and a few unforgettable pieces.",
    approach:
      "Studio IA coordinated a design-led finish: polished chrome, handmade tile, and vintage-inspired fixtures against cream walls and warm floors. Color does the work — dusty pink, mint, sage, and teal — so the small rooms feel considered, not cramped.",
    outcome:
      "A livable, highly specific interior: a kitchen with teal counters and gingham under the sink, a bathroom with a pink console basin and zellige shower, and a pink door that greets the California light.",
    services: [
      "ADU Design",
      "Construction Coordination",
      "Permit Coordination",
    ],
    stats: [
      { label: "Neighborhood", value: "West Side" },
      { label: "Type", value: "ADU" },
      { label: "Finish", value: "Custom interiors" },
    ],
    image: "/work/santa-barbara-west-side-adu/kitchen.jpg",
    imageAlt:
      "West Side Santa Barbara ADU kitchen with teal counters, sage tile, chrome faucet, and gingham skirt under the sink",
    gallery: westSideGallery,
    video: {
      src: "/work/santa-barbara-west-side-adu/tour.mp4",
      poster: "/work/santa-barbara-west-side-adu/kitchen.jpg",
      caption: "A walkthrough of the Santa Barbara West Side ADU.",
    },
  },
  {
    slug: "noleta-adu",
    title: "Noleta ADU",
    location: "Noleta",
    locationSlug: "goleta",
    scope: "Completed ADU",
    metaTitle: "Noleta ADU | Santa Barbara County | Studio IA",
    metaDescription:
      "A 425 sq ft, 1-bedroom Noleta ADU in Santa Barbara County — site work leveraged with a retaining wall, finished in color, chrome, and custom interiors.",
    summary:
      "A 425 sq ft, 1-bedroom ADU in Noleta — Santa Barbara County site work that leveraged an existing retaining wall into a compact, highly finished home.",
    challenge:
      "The lot needed a small, livable ADU without excess grading. Working with the existing retaining wall and a tight footprint meant every square foot had to earn its keep.",
    approach:
      "Studio IA coordinated a 425 sq ft, 1-bedroom plan that used the retaining wall as a site advantage rather than a constraint. Design, permit, and construction coordination kept the finish personal: chrome, handmade tile, and bold color in a county-jurisdiction build.",
    outcome:
      "A one-bedroom ADU that reads larger than its footprint — teal kitchen, dusty-pink bath, and a walkable Santa Barbara County site that makes smart use of the retaining wall.",
    services: [
      "ADU Design",
      "Construction Coordination",
      "Permit Coordination",
    ],
    stats: [
      { label: "Size", value: "425 sq ft" },
      { label: "Layout", value: "1 bedroom" },
      { label: "Site", value: "Retaining wall" },
    ],
    image: "/work/santa-barbara-west-side-adu/kitchen.jpg",
    imageAlt:
      "Noleta ADU kitchen with teal counters, sage tile, and chrome faucet — 425 sq ft Santa Barbara County project",
    gallery: westSideGallery,
    video: {
      src: "/work/santa-barbara-west-side-adu/tour.mp4",
      poster: "/work/santa-barbara-west-side-adu/kitchen.jpg",
      caption: "A walkthrough of the Noleta ADU.",
    },
  },
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
    services: [
      "Full Journey",
      "ADU Design",
      "Construction Coordination",
      "Permit Coordination",
    ],
    stats: [
      { label: "Size", value: "650 sq ft" },
      { label: "Type", value: "Detached ADU" },
      { label: "Path", value: "Design-build" },
    ],
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=1400&q=80",
    imageAlt:
      "Living room with polished chrome seating, glass tables, and marble fireplace — placeholder for Goleta coastal cottage",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

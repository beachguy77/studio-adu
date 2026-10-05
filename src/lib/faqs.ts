export type FaqItem = {
  question: string;
  answer: string;
};

export const homeFaqs: FaqItem[] = [
  {
    question: "What does Studio IAR do?",
    answer:
      "Studio IAR is a Santa Barbara interior design studio offering design consulting, material sourcing, and project coordination for residential and hospitality work — with ADU coordination as a local specialty.",
  },
  {
    question: "Are you architects?",
    answer:
      "We collaborate with licensed California architects whenever architectural services are required.",
  },
  {
    question: "Do you build ADUs?",
    answer:
      "Construction is performed by licensed California contractors. Studio IAR coordinates the project according to the services defined in each client agreement.",
  },
  {
    question: "Do you only work on ADUs?",
    answer:
      "No. ADUs are a local specialty. Our broader practice is interior design consulting, material sourcing, and project coordination for residential and hospitality projects.",
  },
  {
    question: "Do I need to hire and manage every consultant myself?",
    answer:
      "No. Studio IAR is built to be one point of contact — coordinating design, sourcing, and licensed partners into one managed experience.",
  },
  {
    question: "Which cities does Studio IAR serve?",
    answer:
      "We serve Santa Barbara, Montecito, Goleta, Carpinteria, Summerland, Ventura, and surrounding communities.",
  },
];

/** Homepage FAQ — interiors-first; ADU detail lives on services/FAQ pages. */
export const homePageFaqs: FaqItem[] = [
  {
    question: "What does Studio IAR do?",
    answer:
      "Studio IAR is a Santa Barbara interior design studio offering design consulting, material sourcing, and project coordination for residential and hospitality projects.",
  },
  {
    question: "Are you architects or general contractors?",
    answer:
      "We collaborate with licensed California architects whenever architectural services are required. Construction is performed by licensed California contractors according to each client agreement.",
  },
  {
    question: "Do I need to hire and manage every consultant myself?",
    answer:
      "No. Studio IAR is built to be one point of contact — coordinating design, sourcing, and licensed partners into one managed experience.",
  },
  {
    question: "Which cities does Studio IAR serve?",
    answer:
      "We serve Santa Barbara, Montecito, Goleta, Carpinteria, Summerland, Ventura, and surrounding communities.",
  },
];

export const consultingFaqs: FaqItem[] = [
  {
    question: "What is included in interior design consulting?",
    answer:
      "Discovery, concept direction, spatial planning, and finish guidance for residential or hospitality interiors — scoped to the depth of engagement you need.",
  },
  {
    question: "Do you work on hospitality projects?",
    answer:
      "Yes. Studio IAR brings experience from major hotels and restaurants into local residential and hospitality interiors.",
  },
];

export const sourcingFaqs: FaqItem[] = [
  {
    question: "Can you source materials without a full redesign?",
    answer:
      "Often yes. We can support procurement and selections against an existing design direction after a short alignment review.",
  },
  {
    question: "Do you manage lead times and orders?",
    answer:
      "Yes. Material sourcing includes coordinating selections, alternatives, and order timing so finishes arrive when the project needs them.",
  },
];

export const coordinationFaqs: FaqItem[] = [
  {
    question: "How is project coordination different from being a general contractor?",
    answer:
      "Licensed California contractors perform construction. Studio IAR coordinates communication, sequencing, and client decisions according to your agreement — we do not market ourselves as the builder.",
  },
  {
    question: "Can you coordinate with my existing architect or contractor?",
    answer:
      "Yes. We often join as the design and coordination layer alongside independently licensed professionals already on the project.",
  },
];

export const designFaqs: FaqItem[] = [
  {
    question: "What is included in ADU design services?",
    answer:
      "Feasibility guidance, concept development, and design coordination toward permit-ready drawings — collaborating with licensed architects when architectural services are required.",
  },
  {
    question: "Will my ADU design work with Santa Barbara zoning?",
    answer:
      "We shape the design path around local zoning, setbacks, height limits, parking rules, and coastal considerations so the project is grounded in what your lot can support.",
  },
];

export const constructionFaqs: FaqItem[] = [
  {
    question: "Do you build the ADU yourselves?",
    answer:
      "Construction is performed by licensed California contractors. Studio IAR coordinates the build according to the services in your agreement — keeping communication clear and the process coherent.",
  },
  {
    question: "Can Studio IAR coordinate construction from another designer’s plans?",
    answer:
      "Often yes, after a readiness review. We confirm whether drawings are coordinated and permit-aligned before construction coordination begins.",
  },
];

export const garageFaqs: FaqItem[] = [
  {
    question: "Is a garage conversion simpler than a detached ADU?",
    answer:
      "It can be, because structure and utilities may already exist — but structural upgrades, egress, insulation, and parking replacement still require careful coordination.",
  },
  {
    question: "Will I lose parking if I convert my garage?",
    answer:
      "Parking replacement rules vary by jurisdiction. We review requirements early so parking and site circulation are part of the design solution.",
  },
];

export const designBuildFaqs: FaqItem[] = [
  {
    question: "What does a full Studio IAR ADU journey include?",
    answer:
      "One coordinated path from feasibility and design through permitting and construction coordination — fewer handoffs, clearer accountability, and decisions informed by delivery from day one.",
  },
  {
    question: "Is a coordinated process more expensive?",
    answer:
      "Not necessarily. A single managed path can reduce redesign, delay, and miscommunication. We discuss scope and fees transparently at the start.",
  },
];

export const permittingFaqs: FaqItem[] = [
  {
    question: "Can you coordinate ADU permits in Santa Barbara County?",
    answer:
      "Yes. We coordinate plan packages, submittals, comments, and revisions with city and county reviewers on your behalf.",
  },
  {
    question: "What slows down ADU permits locally?",
    answer:
      "Incomplete drawings, unresolved zoning conflicts, slow plan-check responses, and site constraints. Thorough upfront coordination reduces those loops.",
  },
];

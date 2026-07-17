export type FaqItem = {
  question: string;
  answer: string;
};

export const homeFaqs: FaqItem[] = [
  {
    question: "Are you architects?",
    answer:
      "We collaborate with licensed California architects whenever architectural services are required.",
  },
  {
    question: "Do you build ADUs?",
    answer:
      "Construction is performed by licensed California contractors. Studio IA coordinates the project according to the services defined in each client agreement.",
  },
  {
    question: "How much does an ADU cost in Santa Barbara County?",
    answer:
      "Costs vary by size, site conditions, finishes, and scope. We begin with a feasibility conversation so you understand budget drivers before committing to a full design path.",
  },
  {
    question: "How long does ADU permitting take in Santa Barbara?",
    answer:
      "Timelines depend on jurisdiction, project complexity, and revision cycles. We coordinate submittals and responses so you are not navigating plan check alone.",
  },
  {
    question: "Do I need to hire and manage every consultant myself?",
    answer:
      "No. Studio IA is built to be one point of contact — coordinating architects, engineers, consultants, and licensed builders into one managed experience.",
  },
  {
    question: "Which cities does Studio IA serve?",
    answer:
      "We serve Santa Barbara, Montecito, Goleta, Carpinteria, Summerland, Ventura, and surrounding communities.",
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
      "Construction is performed by licensed California contractors. Studio IA coordinates the build according to the services in your agreement — keeping communication clear and the process coherent.",
  },
  {
    question: "Can Studio IA coordinate construction from another designer’s plans?",
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
    question: "What does a full Studio IA journey include?",
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

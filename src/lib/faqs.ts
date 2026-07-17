export type FaqItem = {
  question: string;
  answer: string;
};

export const homeFaqs: FaqItem[] = [
  {
    question: "How much does an ADU cost in Santa Barbara County?",
    answer:
      "Costs vary by size, site conditions, finishes, and whether you need design only or full construction. Many Santa Barbara County projects fall into a broad range depending on detached vs. conversion, utilities, and coastal or hillside constraints. Studio IA starts with a feasibility conversation so you understand budget drivers before committing to drawings.",
  },
  {
    question: "How long does ADU permitting take in Santa Barbara?",
    answer:
      "Timelines depend on jurisdiction (City of Santa Barbara, County, Goleta, Carpinteria, and others), project complexity, and revision cycles. Straightforward projects can move faster; hillside, coastal, or constrained lots may take longer. We manage submittals and responses so you are not navigating the process alone.",
  },
  {
    question: "Do I need a designer and a contractor separately?",
    answer:
      "Not necessarily. Studio IA offers à la carte design, permitting support, construction, or a full design-build path. If you already have a builder or only need drawings, we can meet you where you are.",
  },
  {
    question: "Can you convert a garage into an ADU?",
    answer:
      "Yes. Garage conversions are a common path when lot coverage, setbacks, or budget favor reusing existing structure. We assess structural, utility, egress, and parking implications early so the design is permit-ready.",
  },
  {
    question: "Which cities does Studio IA serve?",
    answer:
      "We serve Santa Barbara, Montecito, Goleta, Carpinteria, Summerland, Ventura, and surrounding Santa Barbara County communities.",
  },
];

export const designFaqs: FaqItem[] = [
  {
    question: "What is included in ADU design services?",
    answer:
      "Typically site assessment, concept development, floor plans, elevations, and coordination toward permit-ready drawings. Scope can be tailored if you only need early concepts or a full architectural package.",
  },
  {
    question: "Will my ADU design work with Santa Barbara zoning?",
    answer:
      "We design with local zoning, setbacks, height limits, parking rules, and coastal considerations in mind — so drawings are grounded in what your lot can support.",
  },
];

export const constructionFaqs: FaqItem[] = [
  {
    question: "Do you handle construction management for ADUs?",
    answer:
      "Yes. We can manage build quality from foundation through finishes, coordinating trades and inspections with clear communication throughout.",
  },
  {
    question: "Can Studio IA build from plans by another designer?",
    answer:
      "Often yes, after a constructability review. We will confirm whether drawings are buildable and permit-aligned before estimating.",
  },
];

export const garageFaqs: FaqItem[] = [
  {
    question: "Is a garage conversion faster than a new detached ADU?",
    answer:
      "It can be, because structure and utilities may already exist — but structural upgrades, insulation, egress, and parking replacement can still affect timeline and cost.",
  },
  {
    question: "Will I lose parking if I convert my garage?",
    answer:
      "Parking replacement rules vary by jurisdiction. We review requirements early so parking, driveway, and site circulation are part of the design solution.",
  },
];

export const designBuildFaqs: FaqItem[] = [
  {
    question: "What is ADU design-build?",
    answer:
      "Design-build means one team guides design, permitting, and construction under a coordinated process — fewer handoffs, clearer accountability, and decisions informed by buildability from day one.",
  },
  {
    question: "Is design-build more expensive?",
    answer:
      "Not necessarily. A coordinated path can reduce redesign, change orders, and delay costs. We discuss scope and fee structure transparently at the start.",
  },
];

export const permittingFaqs: FaqItem[] = [
  {
    question: "Can you submit ADU plans to Santa Barbara County for me?",
    answer:
      "Yes. We prepare and submit plan sets, track comments, and coordinate revisions with planners and reviewers on your behalf.",
  },
  {
    question: "What slows down ADU permits locally?",
    answer:
      "Incomplete drawings, unresolved zoning conflicts, incomplete responses to plan-check comments, and site constraints (coastal, hillside, utilities) are common delays. Thorough upfront design reduces those loops.",
  },
];

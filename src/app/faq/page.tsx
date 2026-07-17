import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { homeFaqs } from "@/lib/faqs";
import { createPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "ADU FAQ | Santa Barbara",
  description:
    "Answers about Studio IA’s ADU design and project management model — architects, contractors, permitting, costs, and Santa Barbara service areas.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <SiteShell>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <PageHero
        eyebrow="FAQ"
        title="Clear answers about how Studio IA works"
        lead="We are a premium ADU design and project management studio — one point of contact coordinating licensed professionals across Santa Barbara County."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "FAQ" }]}
      />
      <FaqSection
        faqs={homeFaqs}
        eyebrow="Homeowners ask"
        title="Design, coordination, and delivery"
      />
      <CtaBand
        title="Still have questions?"
        text="Schedule a consultation. We’ll walk through your property and the right coordinated path."
      />
    </SiteShell>
  );
}

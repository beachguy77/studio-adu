import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { homeFaqs } from "@/lib/faqs";
import { createPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "FAQ | Santa Barbara",
  description:
    "Answers about Studio IAR’s interior design, sourcing, and coordination model — architects, contractors, ADUs, and Santa Barbara service areas.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <SiteShell>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <PageHero
        eyebrow="FAQ"
        title="Clear answers about how Studio IAR works"
        lead="We are a Santa Barbara interior design studio — consulting, sourcing, and coordination for residential and hospitality, with ADU coordination as a local specialty."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "FAQ" }]}
      />
      <FaqSection
        faqs={homeFaqs}
        eyebrow="Clients ask"
        title="Design, sourcing, and delivery"
      />
      <CtaBand
        title="Still have questions?"
        text="Schedule a consultation. We’ll walk through your project and the right coordinated path."
      />
    </SiteShell>
  );
}

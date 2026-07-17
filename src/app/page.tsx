import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyStudioIA from "@/components/WhyStudioIA";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import AreasPreview from "@/components/AreasPreview";
import About from "@/components/About";
import FaqSection from "@/components/FaqSection";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import { homeFaqs } from "@/lib/faqs";
import { createPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Thoughtfully Designed ADUs in Santa Barbara",
  description:
    "Studio IA is Santa Barbara’s premium ADU design and project management studio — one point of contact from feasibility and design through permitting and construction coordination.",
  path: "/",
});

export default function HomePage() {
  return (
    <SiteShell headerVariant="transparent">
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <Hero />
      <WhyStudioIA />
      <Services />
      <Portfolio />
      <Process />
      <AreasPreview />
      <About />
      <FaqSection faqs={homeFaqs} title="Questions homeowners ask us" />
      <Contact />
    </SiteShell>
  );
}

import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
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
  title: "ADU Design & Construction in Santa Barbara County",
  description:
    "Studio IA designs and builds ADUs across Santa Barbara, Montecito, Goleta, Carpinteria, Summerland, and Ventura — design, permitting, and construction with a human touch.",
  path: "/",
});

export default function HomePage() {
  return (
    <SiteShell headerVariant="transparent">
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <AreasPreview />
      <About />
      <FaqSection faqs={homeFaqs} title="ADU questions we hear most" />
      <Contact />
    </SiteShell>
  );
}

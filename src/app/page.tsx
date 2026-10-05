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
import { homePageFaqs } from "@/lib/faqs";
import { createPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Interior Design & Project Coordination in Santa Barbara",
  description:
    "Studio IAR is a Santa Barbara interior design studio — design consulting, material sourcing, and project coordination for residential and hospitality projects.",
  path: "/",
});

export default function HomePage() {
  return (
    <SiteShell headerVariant="transparent">
      <JsonLd data={faqJsonLd(homePageFaqs)} />
      <Hero />
      <WhyStudioIA />
      <Services />
      <Portfolio />
      <Process />
      <AreasPreview />
      <About />
      <FaqSection faqs={homePageFaqs} title="Questions clients ask us" />
      <Contact />
    </SiteShell>
  );
}

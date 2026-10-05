import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";
import CtaBand from "@/components/CtaBand";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Process | Design. Source. Coordinate.",
  description:
    "How Studio IAR’s design-led process works in Santa Barbara — consulting, sourcing, and coordination for interiors, with ADU pathways alongside licensed professionals.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Process"
        title="Design. Source. Coordinate."
        lead={`${siteConfig.promise} A design-led path with a single point of contact — and a trusted network of licensed professionals when the project needs them.`}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Process" }]}
      />

      <Process />

      <section className="section section-alt">
        <div className="container prose" style={{ maxWidth: "42rem" }}>
          <h2>What coordination means</h2>
          <p>
            Traditional projects often ask clients to hire and manage a
            designer, architect, engineer, and contractor separately. Studio
            IAR simplifies that into one coordinated experience — interiors
            first, with ADU delivery as a specialty path when needed.
          </p>
          <p>
            We collaborate with licensed California architects whenever
            architectural services are required. Construction is performed by
            licensed California contractors according to each client agreement.
          </p>
          <p>
            Explore{" "}
            <Link href="/services">services</Link>, read our{" "}
            <Link href="/faq">FAQ</Link>, or{" "}
            <Link href="/contact">schedule a consultation</Link>.
          </p>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}

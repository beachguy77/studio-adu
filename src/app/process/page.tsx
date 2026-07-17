import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";
import CtaBand from "@/components/CtaBand";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "ADU Process | Design. Coordinate. Deliver.",
  description:
    "How Studio IA’s design-led ADU process works in Santa Barbara — from feasibility through permitting and construction coordination with licensed professionals.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Process"
        title="Design. Coordinate. Deliver."
        lead={`${siteConfig.promise} A design-led path with a single point of contact — and a trusted network of licensed professionals.`}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Process" }]}
      />

      <Process />

      <section className="section section-alt">
        <div className="container prose" style={{ maxWidth: "42rem" }}>
          <h2>What “one process” means</h2>
          <p>
            Traditional ADU projects often ask homeowners to hire and manage an
            architect, engineer, and contractor separately. Studio IA simplifies
            that into one coordinated experience.
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

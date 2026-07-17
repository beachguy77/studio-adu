import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import { testimonial } from "@/lib/content";
import { createPageMetadata, personJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Imogen Adams Reyes & Studio IA",
  description:
    "Meet Imogen Adams Reyes and Studio IA — a Santa Barbara ADU design and project management studio offering one coordinated path from feasibility through delivery.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <JsonLd data={personJsonLd()} />

      <PageHero
        eyebrow="About"
        title="A design studio that coordinates delivery"
        lead="Studio IA was founded so homeowners don’t have to manage an architect, engineer, and contractor alone — one trusted team, one carefully managed experience."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
      />

      <section className="section">
        <div className="container prose-grid">
          <div className="prose">
            <h2>Our approach</h2>
            <p>
              Building an ADU shouldn&apos;t require coordinating multiple
              firms. Studio IA brings together experienced architects,
              engineers, consultants, and licensed builders into one
              coordinated experience.
            </p>
            <p>
              We guide{" "}
              <Link href="/services/adu-design">design</Link>,{" "}
              <Link href="/services/permitting">permit coordination</Link>, and{" "}
              <Link href="/services/adu-construction">
                construction coordination
              </Link>
              — or a full{" "}
              <Link href="/services/design-build">journey</Link> from
              feasibility through delivery. You choose the depth of engagement;
              we keep the standard of care.
            </p>

            <h2>{siteConfig.founder.name}</h2>
            <p className="founder-role">{siteConfig.founder.role}</p>
            <p>{siteConfig.founder.bio}</p>
            <p>
              We collaborate with licensed California architects whenever
              architectural services are required. Construction is performed by
              licensed California contractors according to each client
              agreement.
            </p>

            <h2>What clients notice</h2>
            <blockquote className="testimonial">
              <p>&ldquo;{testimonial.quote}&rdquo;</p>
              <cite>{testimonial.attribution}</cite>
            </blockquote>
          </div>

          <aside className="side-panel">
            <h2>At a glance</h2>
            <ul className="side-steps">
              <li>
                <strong>Based in</strong>
                <span>
                  {siteConfig.address.addressLocality},{" "}
                  {siteConfig.address.addressRegion}
                </span>
              </li>
              <li>
                <strong>Serves</strong>
                <span>{siteConfig.areaServed.join(", ")}</span>
              </li>
              <li>
                <strong>Focus</strong>
                <span>Design &amp; project coordination for ADUs</span>
              </li>
              <li>
                <strong>Promise</strong>
                <span>{siteConfig.promise}</span>
              </li>
            </ul>
            <Link href="/contact" className="btn btn-primary btn-full">
              Schedule a consultation
            </Link>
            <Link href="/work" className="text-link">
              View projects
            </Link>
          </aside>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}

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
  title: "About Imogen Adams Reyes & Studio IAR",
  description:
    "Meet Imogen Adams Reyes and Studio IAR — a Santa Barbara interior design studio offering consulting, material sourcing, and project coordination, with ADU coordination as a local specialty.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <JsonLd data={personJsonLd()} />

      <PageHero
        eyebrow="About"
        title="A design studio that coordinates delivery"
        lead="Studio IAR was founded so clients don’t have to manage every designer, consultant, and contractor alone — thoughtful interiors, clear sourcing, and carefully managed coordination."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
      />

      <section className="section">
        <div className="container prose-grid">
          <div className="prose">
            <h2>Our approach</h2>
            <p>
              Beautiful spaces shouldn&apos;t require coordinating multiple firms.
              Studio IAR brings fifteen years of interior design experience —
              including major hotels and restaurants — into residential and
              hospitality work through design consulting, material sourcing, and
              project coordination.
            </p>
            <p>
              Explore{" "}
              <Link href="/services/interior-design-consulting">
                design consulting
              </Link>
              ,{" "}
              <Link href="/services/material-sourcing">material sourcing</Link>,
              and{" "}
              <Link href="/services/project-coordination">
                project coordination
              </Link>
              — or our local{" "}
              <Link href="/services/design-build">ADU full journey</Link>. You
              choose the depth of engagement; we keep the standard of care.
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
                <span>
                  Interior design consulting, sourcing &amp; coordination
                </span>
              </li>
              <li>
                <strong>Specialty</strong>
                <span>ADU coordination with licensed partners</span>
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

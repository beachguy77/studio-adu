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
    "Meet Imogen Adams Reyes, founder of Studio IA — premium ADU design and construction with a human touch across Santa Barbara County.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <JsonLd data={personJsonLd()} />

      <PageHero
        eyebrow="About"
        title="A human-centered ADU studio"
        lead="Studio IA was founded to make ADU design and construction feel clear, calm, and personal — without losing architectural rigor."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
      />

      <section className="section">
        <div className="container prose-grid">
          <div className="prose">
            <h2>Our approach</h2>
            <p>
              Accessory dwelling units ask homeowners to navigate design, code,
              budget, and family needs at once. Studio IA exists to hold that
              complexity with care — explaining options plainly, designing for
              how people actually live, and stewarding projects through
              Santa Barbara County realities.
            </p>
            <p>
              We work vertically:{" "}
              <Link href="/services/adu-design">design</Link>,{" "}
              <Link href="/services/permitting">permitting</Link>,{" "}
              <Link href="/services/adu-construction">construction</Link>, or a
              full <Link href="/services/design-build">design-build</Link> path.
              You choose the depth of engagement; we keep the standard of care.
            </p>

            <h2>{siteConfig.founder.name}</h2>
            <p className="founder-role">{siteConfig.founder.role}</p>
            <p>{siteConfig.founder.bio}</p>
            <p>
              Credentials and license details will be published here as they are
              finalized. For now, reach out directly — we are happy to share
              process, references, and project documentation.
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
                <span>{siteConfig.address.addressLocality}, {siteConfig.address.addressRegion}</span>
              </li>
              <li>
                <strong>Serves</strong>
                <span>{siteConfig.areaServed.join(", ")}</span>
              </li>
              <li>
                <strong>Focus</strong>
                <span>ADU design, permitting, and construction</span>
              </li>
            </ul>
            <Link href="/contact" className="btn btn-primary btn-full">
              Contact Studio IA
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

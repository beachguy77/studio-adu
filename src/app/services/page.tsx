import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { getServicesByCategory } from "@/lib/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Interior Design & ADU Services",
  description:
    "Studio IAR services in Santa Barbara: interior design consulting, material sourcing, project coordination, and ADU coordination with licensed partners.",
  path: "/services",
});

export default function ServicesIndexPage() {
  const interiors = getServicesByCategory("interiors");
  const adu = getServicesByCategory("adu");

  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Design. Source. Coordinate."
        lead="Interior design consulting, material sourcing, and project coordination for residential and hospitality — with ADU coordination as a local specialty."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Core practice</p>
            <h2>Interiors &amp; coordination</h2>
          </div>
          <div className="services-index">
            {interiors.map((service) => (
              <article key={service.slug} className="services-index-item">
                <p className="eyebrow">{service.eyebrow}</p>
                <h2>
                  <Link href={`/services/${service.slug}`}>{service.name}</Link>
                </h2>
                <p>{service.lead}</p>
                <Link href={`/services/${service.slug}`} className="text-link">
                  Explore {service.shortName.toLowerCase()}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Local specialty</p>
            <h2>ADU coordination</h2>
            <p className="section-lead">
              Feasibility through design, permitting, and construction
              coordination — alongside independently licensed architects,
              engineers, and contractors.
            </p>
          </div>
          <div className="services-index">
            {adu.map((service) => (
              <article key={service.slug} className="services-index-item">
                <p className="eyebrow">{service.eyebrow}</p>
                <h2>
                  <Link href={`/services/${service.slug}`}>{service.name}</Link>
                </h2>
                <p>{service.lead}</p>
                <Link href={`/services/${service.slug}`} className="text-link">
                  Explore {service.shortName.toLowerCase()}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}

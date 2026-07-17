import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { services } from "@/lib/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "ADU Services",
  description:
    "Studio IA ADU services: design coordination, construction coordination, garage conversion, full journey, and permit coordination across Santa Barbara County.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="ADU services, vertically offered"
        lead="Choose the full journey or a single phase — feasibility, design coordination, permit coordination, and construction coordination."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services" },
        ]}
      />

      <section className="section">
        <div className="container services-index">
          {services.map((service) => (
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
      </section>

      <CtaBand />
    </SiteShell>
  );
}

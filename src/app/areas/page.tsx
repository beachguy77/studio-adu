import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { locations } from "@/lib/locations";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Service Areas",
  description:
    "Studio IAR serves Santa Barbara, Montecito, Goleta, Carpinteria, Summerland, and Ventura with interior design, coordination, and ADU specialty services.",
  path: "/areas",
});

export default function AreasIndexPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Areas"
        title="Where we work on the South Coast"
        lead="Local pages for the communities we serve — interior design and coordination studio-wide, with ADU specialty guidance in each place."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Areas" }]}
      />

      <section className="section">
        <div className="container services-index">
          {locations.map((location) => (
            <article key={location.slug} className="services-index-item">
              <p className="eyebrow">{location.regionLabel}</p>
              <h2>
                <Link href={`/areas/${location.slug}`}>{location.name}</Link>
              </h2>
              <p>{location.lead}</p>
              <Link href={`/areas/${location.slug}`} className="text-link">
                ADU services in {location.name}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CtaBand secondaryHref="/services" secondaryLabel="View services" />
    </SiteShell>
  );
}

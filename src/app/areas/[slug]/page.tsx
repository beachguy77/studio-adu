import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import {
  getLocation,
  getNearbyLocations,
  locations,
} from "@/lib/locations";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  faqJsonLd,
} from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};

  return createPageMetadata({
    title: location.metaTitle.replace(" | Studio IA", ""),
    description: location.metaDescription,
    path: `/areas/${location.slug}`,
  });
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const nearby = getNearbyLocations(location.nearby);
  const localProjects = projects.filter(
    (project) => project.locationSlug === location.slug,
  );
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Areas", path: "/areas" },
    { name: location.name, path: `/areas/${location.slug}` },
  ];

  return (
    <SiteShell>
      <JsonLd data={[breadcrumbJsonLd(crumbs), faqJsonLd(location.faqs)]} />

      <PageHero
        eyebrow={location.regionLabel}
        title={location.title}
        lead={location.lead}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Areas", href: "/areas" },
          { name: location.name },
        ]}
      />

      <section className="section">
        <div className="container prose-grid">
          <div className="prose">
            {location.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <h2>Local considerations</h2>
            <ul>
              {location.localNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>

            <h2>ADU services in {location.name}</h2>
            <ul className="inline-link-list">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <aside className="side-panel">
            <h2>Projects nearby</h2>
            {localProjects.length ? (
              <ul className="side-links">
                {localProjects.map((project) => (
                  <li key={project.slug}>
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="muted">
                Explore our{" "}
                <Link href="/work">project archive</Link> while we document more{" "}
                {location.name} work.
              </p>
            )}
            <Link href="/contact" className="btn btn-primary btn-full">
              Discuss a {location.name} ADU
            </Link>
          </aside>
        </div>
      </section>

      <FaqSection
        faqs={location.faqs}
        title={`ADU questions in ${location.name}`}
      />

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Nearby</p>
            <h2>Also serving</h2>
          </div>
          <ul className="area-pills">
            {nearby.map((item) => (
              <li key={item.slug}>
                <Link href={`/areas/${item.slug}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={`Planning an ADU in ${location.name}?`}
        text="Share your address, goals, and timeline — we’ll recommend the right Studio IA path."
      />
    </SiteShell>
  );
}

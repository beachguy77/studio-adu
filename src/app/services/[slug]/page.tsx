import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import {
  getRelatedServices,
  getService,
  services,
} from "@/lib/services";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.metaTitle.replace(" | Studio IA", ""),
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedSlugs);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];

  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          serviceJsonLd({
            name: service.name,
            description: service.metaDescription,
            path: `/services/${service.slug}`,
            serviceType: service.serviceType,
          }),
          faqJsonLd(service.faqs),
        ]}
      />

      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        lead={service.lead}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.name },
        ]}
      />

      <section className="section">
        <div className="container prose-grid">
          <div className="prose">
            {service.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <h2>What you can expect</h2>
            <ul>
              {service.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="side-panel">
            <h2>Process</h2>
            <ol className="side-steps">
              {service.process.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}</strong>
                  <span>{step.description}</span>
                </li>
              ))}
            </ol>
            <Link href="/contact" className="btn btn-primary btn-full">
              Start a consultation
            </Link>
          </aside>
        </div>
      </section>

      <FaqSection faqs={service.faqs} />

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Continue exploring</p>
            <h2>Related services</h2>
          </div>
          <ul className="related-list">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/services/${item.slug}`}>{item.name}</Link>
                <p>{item.lead}</p>
              </li>
            ))}
            <li>
              <Link href="/areas">Service areas</Link>
              <p>Santa Barbara, Montecito, Goleta, Carpinteria, and more.</p>
            </li>
          </ul>
        </div>
      </section>

      <CtaBand
        title={`Talk with us about ${service.shortName.toLowerCase()}`}
        secondaryHref="/work"
        secondaryLabel="See projects"
      />
    </SiteShell>
  );
}

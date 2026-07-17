import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { getProject, projects } from "@/lib/projects";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  creativeWorkJsonLd,
} from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return createPageMetadata({
    title: project.metaTitle.replace(" | Studio IA", ""),
    description: project.metaDescription,
    path: `/work/${project.slug}`,
    image: project.image,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: project.title, path: `/work/${project.slug}` },
  ];

  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          creativeWorkJsonLd({
            name: project.title,
            description: project.summary,
            path: `/work/${project.slug}`,
            image: project.image,
            location: project.location,
          }),
        ]}
      />

      <PageHero
        eyebrow={`${project.location} · ${project.scope}`}
        title={project.title}
        lead={project.summary}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Work", href: "/work" },
          { name: project.title },
        ]}
      />

      <section className="section">
        <div className="container case-study">
          <div className="case-study-media">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={1400}
              height={900}
              sizes="(max-width: 900px) 100vw, 70vw"
              priority
            />
          </div>

          <ul className="case-stats">
            {project.stats.map((stat) => (
              <li key={stat.label}>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
              </li>
            ))}
          </ul>

          <div className="prose case-study-copy">
            <h2>Challenge</h2>
            <p>{project.challenge}</p>
            <h2>Approach</h2>
            <p>{project.approach}</p>
            <h2>Outcome</h2>
            <p>{project.outcome}</p>

            <h2>Services</h2>
            <ul className="inline-link-list">
              {project.services.map((serviceName) => (
                <li key={serviceName}>{serviceName}</li>
              ))}
            </ul>

            <p>
              Explore{" "}
              <Link href={`/areas/${project.locationSlug}`}>
                ADU services in {project.location}
              </Link>{" "}
              or view{" "}
              <Link href="/work">all projects</Link>.
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="Have a similar property?" />
    </SiteShell>
  );
}

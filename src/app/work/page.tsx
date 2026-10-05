import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { projects } from "@/lib/projects";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Selected Studio IAR projects across Santa Barbara County — interiors and ADU case studies.",
  path: "/work",
});

export default function WorkIndexPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Work"
        title="Selected projects"
        lead="Case studies documenting design intent, process, and outcomes — including ADU delivery as a Studio IAR specialty."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Work" }]}
      />

      <section className="section">
        <div className="container portfolio-grid">
          {projects.map((project) => (
            <article key={project.slug} className="project">
              <Link href={`/work/${project.slug}`} className="project-link">
                <div className="project-image">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="project-body">
                  <p className="project-location">
                    {project.location} · {project.scope}
                  </p>
                  <h2>{project.title}</h2>
                  <p>{project.summary}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CtaBand secondaryHref="/services" secondaryLabel="Our services" />
    </SiteShell>
  );
}

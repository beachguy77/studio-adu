import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import Reveal from "@/components/Reveal";

export default function Portfolio() {
  return (
    <section className="portfolio section section-alt" id="portfolio">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <p className="eyebrow">Selected work</p>
            <h2>ADU projects across the county</h2>
            <p className="section-lead">
              Design coordination and full-journey examples.{" "}
              <Link href="/work">View all projects</Link>.
            </p>
          </div>
        </Reveal>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <article className="project">
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
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

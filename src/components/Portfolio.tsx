import Image from "next/image";
import { projects } from "@/lib/content";

export default function Portfolio() {
  return (
    <section className="portfolio section section-alt" id="portfolio">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Our work</p>
          <h2>Recent projects</h2>
          <p className="section-lead">
            A selection of ADUs across Santa Barbara County — design-only and
            full build.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="project-body">
                <p className="project-location">{project.location}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { servicesPreview } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <p className="eyebrow">What we offer</p>
            <h2>Interiors, sourcing, and coordination</h2>
            <p className="section-lead">
              Design consulting, material sourcing, and project coordination —
              plus ADU coordination as a local specialty with licensed partners.{" "}
              <Link href="/services">View all services</Link>.
            </p>
          </div>
        </Reveal>

        <div className="services-list">
          {servicesPreview.map((service, index) => (
            <Reveal key={service.step} delay={index * 60}>
              <article className="service-item">
                <span className="service-step">{service.step}</span>
                <div className="service-copy">
                  <h3>
                    <Link href={service.href}>{service.title}</Link>
                  </h3>
                  <p>{service.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

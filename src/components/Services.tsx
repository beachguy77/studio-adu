import { services } from "@/lib/content";

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">What we offer</p>
          <h2>Services at every stage</h2>
          <p className="section-lead">
            We work vertically — engage us for the full journey or stop at any
            step along the way.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.step} className="service-card">
              <span className="service-step">{service.step}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

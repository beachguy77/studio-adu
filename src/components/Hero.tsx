import { heroImage } from "@/lib/content";

export default function Hero() {
  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      <div className="container hero-content">
        <p className="eyebrow">Santa Barbara County</p>
        <h1>ADU design &amp; construction, start to finish</h1>
        <p className="hero-lead">
          From feasibility and architectural drawings to plan submission, build,
          and keys in hand — or choose only the services you need. We bring a
          human touch to every project.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Schedule a consultation
          </a>
          <a href="#services" className="btn btn-secondary">
            View services
          </a>
        </div>
      </div>
    </section>
  );
}

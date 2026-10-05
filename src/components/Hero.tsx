import Link from "next/link";
import { heroImage } from "@/lib/content";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </div>
      <div className="container hero-content">
        <p className="hero-brand">Studio IAR</p>
        <h1>
          Thoughtfully designed interiors.
          <br />
          Seamlessly coordinated.
        </h1>
        <p className="hero-lead">
          Studio IAR is a Santa Barbara interior design studio — consulting,
          material sourcing, and project coordination for residential and
          hospitality, with a local specialty in ADU coordination.
        </p>
        <p className="hero-promise">
          One point of contact. One trusted team. One carefully managed
          experience.
        </p>
        <div className="hero-actions">
          <Link href="/contact" className="btn btn-primary">
            Schedule a consultation
          </Link>
          <Link href="/work" className="btn btn-secondary">
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}

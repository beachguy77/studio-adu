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
        <p className="hero-brand">Studio IA</p>
        <h1>
          Thoughtfully designed ADUs.
          <br />
          Seamlessly delivered.
        </h1>
        <p className="hero-lead">
          Studio IA guides homeowners through every stage of the ADU
          journey—from feasibility and design through permitting and
          construction coordination.
        </p>
        <p className="hero-promise">
          One point of contact. One trusted team. One beautifully managed
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

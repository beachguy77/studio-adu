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
        <h1>ADU design &amp; construction in Santa Barbara County</h1>
        <p className="hero-lead">
          From concept and permits to build — or the stages you need — with a
          human touch across Santa Barbara, Montecito, Goleta, and nearby
          communities.
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

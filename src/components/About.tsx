import Link from "next/link";
import { aboutStats, testimonial } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section className="about section section-alt" id="about">
      <div className="container about-grid">
        <Reveal>
          <div className="about-content">
            <p className="eyebrow">About Studio IA</p>
            <h2>Local ADU expertise with a human touch</h2>
            <p>
              Studio IA is a Santa Barbara County–focused design and build team
              led by {siteConfig.founder.name}. We understand local zoning,
              coastal considerations, and permitting — so you can focus on the
              result, not the paperwork.
            </p>
            <p>
              Whether you need a full-service partner or help with a single
              phase, we meet you where you are and guide the project forward
              with clarity and care.{" "}
              <Link href="/about">Meet the founder</Link> or explore{" "}
              <Link href="/areas/santa-barbara">Santa Barbara ADU services</Link>.
            </p>

            <blockquote className="testimonial">
              <p>&ldquo;{testimonial.quote}&rdquo;</p>
              <cite>{testimonial.attribution}</cite>
            </blockquote>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="about-stats">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="stat">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

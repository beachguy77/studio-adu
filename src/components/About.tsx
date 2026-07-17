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
            <h2>Building an ADU shouldn&apos;t require coordinating multiple firms</h2>
            <p>
              Studio IA simplifies the process by bringing together experienced
              architects, engineers, consultants, and licensed builders into one
              coordinated experience — led by {siteConfig.founder.name} in
              Santa Barbara County.
            </p>
            <p>
              You get one conversation and one trusted team.{" "}
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

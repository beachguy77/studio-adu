import Link from "next/link";
import { aboutStats } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-grid">
        <Reveal>
          <div>
            <p className="eyebrow">About Studio IAR</p>
            <h2>A design studio that coordinates delivery</h2>
            <p>
              Studio IAR simplifies beautiful projects by combining interior
              design consulting, material sourcing, and project coordination —
              one trusted point of contact from concept through installation.
            </p>
            <Link href="/about" className="text-link">
              Meet the studio
            </Link>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ul className="about-stats">
            {aboutStats.map((stat) => (
              <li key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

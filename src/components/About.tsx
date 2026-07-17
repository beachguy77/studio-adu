import { aboutStats } from "@/lib/content";

export default function About() {
  return (
    <section className="about section section-alt" id="about">
      <div className="container about-grid">
        <div className="about-content">
          <p className="eyebrow">About us</p>
          <h2>Local expertise for Santa Barbara ADUs</h2>
          <p>
            Studio IA is a Santa Barbara County–focused design and build team.
            We understand local zoning, coastal regulations, and the permitting
            process — so you can focus on the result, not the paperwork.
          </p>
          <p>
            Whether you need a full-service partner or help with a single phase,
            we meet you where you are and guide the project forward with clarity,
            care, and a human touch.
          </p>
        </div>
        <div className="about-stats">
          {aboutStats.map((stat) => (
            <div key={stat.label} className="stat">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

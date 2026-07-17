import { whyStudioIA } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function WhyStudioIA() {
  return (
    <section className="why section" id="why">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <p className="eyebrow">Why Studio IA</p>
            <h2>One team. One process. One beautiful ADU.</h2>
            <p className="section-lead">
              Design. Coordinate. Deliver. — without asking you to manage every
              firm yourself.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="why-grid">
            <div className="why-col">
              <p className="why-label">{whyStudioIA.traditional.label}</p>
              <ol className="why-steps">
                {whyStudioIA.traditional.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
            <div className="why-col why-col-accent">
              <p className="why-label">{whyStudioIA.studio.label}</p>
              <ol className="why-steps">
                {whyStudioIA.studio.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

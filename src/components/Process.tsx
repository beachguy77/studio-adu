import { processSteps } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Process() {
  return (
    <section className="process section" id="process">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <p className="eyebrow">How it works</p>
            <h2>From idea to move-in</h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ol className="process-steps">
            {processSteps.map((step) => (
              <li key={step.title}>
                <strong>{step.title}</strong>
                <span>{step.description}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

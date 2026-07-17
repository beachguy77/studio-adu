import { processSteps } from "@/lib/content";

export default function Process() {
  return (
    <section className="process section" id="process">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">How it works</p>
          <h2>A clear path from idea to move-in</h2>
        </div>

        <ol className="process-steps">
          {processSteps.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              <span>{step.description}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

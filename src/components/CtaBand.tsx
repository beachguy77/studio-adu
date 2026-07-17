import Link from "next/link";

export default function CtaBand({
  title = "Ready to talk about your ADU?",
  text = "Schedule a consultation. We’ll discuss your property, timeline, and the right coordinated path — design, permits, construction coordination, or the full journey.",
  primaryHref = "/contact",
  primaryLabel = "Schedule a consultation",
  secondaryHref = "/services",
  secondaryLabel = "Explore services",
}: {
  title?: string;
  text?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="cta-band section">
      <div className="container cta-band-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-band-actions">
          <Link href={primaryHref} className="btn btn-primary">
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} className="btn btn-ghost">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

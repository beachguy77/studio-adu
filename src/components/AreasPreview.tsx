import Link from "next/link";
import { locations } from "@/lib/locations";
import Reveal from "@/components/Reveal";

export default function AreasPreview() {
  return (
    <section className="areas-preview section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <p className="eyebrow">Service areas</p>
            <h2>ADUs across the South Coast</h2>
            <p className="section-lead">
              Local pages for the communities we serve most often.
            </p>
          </div>
        </Reveal>
        <ul className="area-pills">
          {locations.map((location) => (
            <li key={location.slug}>
              <Link href={`/areas/${location.slug}`}>{location.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

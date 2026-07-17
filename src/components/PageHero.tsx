import Breadcrumbs from "@/components/Breadcrumbs";

type Crumb = { name: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  breadcrumbs: Crumb[];
}) {
  return (
    <header className="page-hero">
      <div className="container">
        <Breadcrumbs items={breadcrumbs} />
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {lead ? <p className="page-hero-lead">{lead}</p> : null}
      </div>
    </header>
  );
}

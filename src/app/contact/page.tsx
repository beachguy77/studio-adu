import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Studio IAR for interior design consulting, material sourcing, project coordination, or ADU coordination in Santa Barbara County.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your project"
        lead="Share a bit about your space, timeline, and goals — residential, hospitality, or ADU. We’ll recommend the right path."
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}
      />
      <Contact />
    </SiteShell>
  );
}

import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Studio IA for ADU design and construction consultations in Santa Barbara County. Call or send a message to start the conversation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Let’s discuss your ADU"
        lead={`Serving ${siteConfig.serviceArea}. Share a few details and we’ll follow up with thoughtful next steps.`}
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}
      />

      <section className="section">
        <div className="container">
          <ContactForm showIntro heading="Consultation request" />
        </div>
      </section>
    </SiteShell>
  );
}

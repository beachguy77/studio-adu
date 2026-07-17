"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function ContactForm({
  heading = "Let’s talk about your ADU",
  showIntro = true,
}: {
  heading?: string;
  showIntro?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sent");
    event.currentTarget.reset();
  }

  return (
    <div className="contact-grid">
      {showIntro ? (
        <Reveal>
          <div className="contact-info">
            <p className="eyebrow">Get in touch</p>
            <h2>{heading}</h2>
            <p>
              Reach out for a free initial consultation. We&apos;ll discuss your
              property, timeline, and which services fit your needs across
              Santa Barbara County.
            </p>

            <ul className="contact-details">
              <li>
                <span className="contact-label">Phone</span>
                <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              </li>
              <li>
                <span className="contact-label">Email</span>
                <a href={siteConfig.emailHref}>{siteConfig.email}</a>
              </li>
              <li>
                <span className="contact-label">Service area</span>
                <span>{siteConfig.serviceArea}</span>
              </li>
            </ul>
          </div>
        </Reveal>
      ) : null}

      <Reveal delay={100}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
              autoComplete="name"
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
          </div>
          <div className="form-row">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(805) 555-0000"
              autoComplete="tel"
            />
          </div>
          <div className="form-row">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Santa Barbara, Goleta, Montecito…"
              autoComplete="address-level2"
            />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your property and what you're looking for..."
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-full">
            Send message
          </button>
          {status === "sent" && (
            <p className="form-note" role="status">
              Thanks — we&apos;ll be in touch soon.
            </p>
          )}
        </form>
      </Reveal>
    </div>
  );
}

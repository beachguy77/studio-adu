"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/content";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sent");
    event.currentTarget.reset();
  }

  return (
    <section className="contact section" id="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <p className="eyebrow">Get in touch</p>
          <h2>Let&apos;s talk about your ADU</h2>
          <p>
            Reach out for a free initial consultation. We&apos;ll discuss your
            property, timeline, and which services fit your needs.
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

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
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
            />
          </div>
          <div className="form-row">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="(805) 555-0000"
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
          <p className="form-note">
            {status === "sent"
              ? "Thanks for your message! Connect this form to Formspree or a server action when you deploy."
              : "Form is a placeholder — connect to Formspree or a server action when ready to deploy."}
          </p>
        </form>
      </div>
    </section>
  );
}

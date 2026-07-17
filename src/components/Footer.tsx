import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-block">
          <p className="footer-brand">
            Studio <span>IA</span>
          </p>
          <p className="footer-meta">
            ADU design &amp; construction · {siteConfig.serviceArea}
          </p>
          <p className="footer-meta">License # pending</p>
          <p className="footer-meta">
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            {" · "}
            <a href={siteConfig.emailHref}>{siteConfig.email}</a>
          </p>
        </div>

        <div>
          <p className="footer-heading">Services</p>
          <ul className="footer-links">
            {footerLinks.services.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-heading">Areas</p>
          <ul className="footer-links">
            {footerLinks.areas.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-heading">Company</p>
          <ul className="footer-links">
            {footerLinks.company.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Studio IA. All rights reserved.
        </p>
        <p className="footer-copy">
          Founded by {siteConfig.founder.name}
        </p>
      </div>
    </footer>
  );
}

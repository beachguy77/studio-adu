import { siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-brand">
          Studio <span>IA</span>
        </p>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Studio IA. Serving Santa Barbara
          County.
        </p>
        <a href={siteConfig.phoneHref} className="footer-phone">
          {siteConfig.phone}
        </a>
      </div>
    </footer>
  );
}

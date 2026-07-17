"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/site";

export default function Header({
  variant = "solid",
}: {
  variant?: "transparent" | "solid";
}) {
  const [scrolled, setScrolled] = useState(variant === "solid");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (variant === "solid") {
      setScrolled(true);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const solid = scrolled || menuOpen || variant === "solid";

  return (
    <header className={`site-header${solid ? " scrolled" : ""}`} id="top">
      <div className="container header-inner">
        <button
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`site-nav${menuOpen ? " open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={"cta" in link && link.cta ? "nav-cta" : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="logo" onClick={closeMenu}>
          <Image
            src="/studio-ia-logo.png"
            alt="Studio IA"
            width={250}
            height={150}
            className="logo-img"
            priority
          />
        </Link>
      </div>
    </header>
  );
}

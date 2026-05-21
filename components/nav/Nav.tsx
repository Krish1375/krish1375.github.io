"use client";

import { meta, navLinks } from "@/lib/data";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-[350ms] ease-in-out"
      style={{
        padding: scrolled ? "12px 40px" : "18px 40px",
        background: scrolled ? "rgba(8,9,12,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "var(--border)" : "none",
      }}
    >
      <nav className="flex items-center justify-between max-w-[1400px] mx-auto">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.3em] uppercase text-[var(--gold)] shrink-0"
        >
          {meta.name} · DS / ML / AI
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNav(link.href)}
                className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.22em] uppercase text-[var(--fg-muted)] hover:text-[var(--gold)] transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className="block w-5 h-[1px] bg-[var(--gold)] transition-transform"
            style={{ transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }}
          />
          <span
            className="block w-5 h-[1px] bg-[var(--gold)] transition-opacity"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-[1px] bg-[var(--gold)] transition-transform"
            style={{ transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }}
          />
        </button>
      </nav>

      {menuOpen && (
        <ul
          className="md:hidden flex flex-col gap-6 py-8 px-10 border-b"
          style={{ borderColor: "rgba(200,170,100,0.12)", background: "rgba(8,9,12,0.95)" }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNav(link.href)}
                className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.22em] uppercase text-[var(--fg-muted)] hover:text-[var(--gold)]"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

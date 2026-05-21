import { meta } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  const footerLinks = [
    { label: "GitHub", href: meta.github },
    { label: "LinkedIn", href: meta.linkedin },
    { label: "Scholar", href: meta.scholar },
  ].filter((l) => l.href);

  return (
    <footer
      className="px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
      style={{ borderTop: "var(--border)" }}
    >
      <p
        className="font-[family-name:var(--font-mono)] text-[8px] tracking-[0.2em] uppercase text-center md:text-left"
        style={{ color: "rgba(232,223,200,0.18)" }}
      >
        © {year} {meta.name} · Built with PyTorch & caffeine
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {footerLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-mono)] text-[8px] tracking-[0.2em] uppercase transition-colors duration-200 hover:text-[var(--gold)]"
            style={{ color: "rgba(232,223,200,0.18)" }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

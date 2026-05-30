import Link from "next/link";
import { CactusMark } from "@/components/cactus-mark";
import { company, navItems } from "@/components/company-data";

export function Footer() {
  return (
    <footer className="border-t border-[#7fd8a8]/12 bg-[#071712]">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr]">
        <div data-animate="footer-item">
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-2xl bg-[#1f6e54] shadow-[0_10px_24px_rgba(31,110,84,0.32)]">
              <CactusMark size={28} body="#c8efd9" showBase={false} />
            </span>
            <p className="font-[var(--font-display)] text-xl font-semibold">{company.brand}</p>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#9fb8ab]">
            Desenvolvimento de aplicativos, jogos e soluções digitais com foco em confiabilidade,
            privacidade e experiências interativas.
          </p>
          <div className="mt-6 grid gap-2 text-sm text-[#cdddd3] sm:grid-cols-2">
            <span>{company.legalName}</span>
            <span>CNPJ {company.cnpj}</span>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={`tel:+5566996194231`}>{company.phone}</a>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:items-end" data-animate="footer-item">
          <nav className="flex flex-wrap gap-3 text-sm text-[#9fb8ab]" aria-label="Rodape">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-[#6f897d]">
            {company.location} · {company.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { company, navItems } from "@/components/company-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04100b]">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative grid size-12 place-items-center overflow-hidden rounded-full border border-[#d6b56d]/30 bg-white">
              <Image
                src="/images/cactus-logo.png"
                alt=""
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </span>
            <p className="font-[var(--font-display)] text-xl font-semibold">{company.brand}</p>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#a7b4a3]">
            Desenvolvimento de aplicativos, jogos e soluções digitais com foco em confiabilidade,
            privacidade e experiências interativas.
          </p>
          <div className="mt-6 grid gap-2 text-sm text-[#dce5d8] sm:grid-cols-2">
            <span>{company.legalName}</span>
            <span>CNPJ {company.cnpj}</span>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={`tel:+5566996194231`}>{company.phone}</a>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <nav className="flex flex-wrap gap-3 text-sm text-[#a7b4a3]" aria-label="Rodape">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-[#71806d]">
            {company.location} · {company.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { CactusMark } from "@/components/cactus-mark";
import { company, navItems } from "@/components/company-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-shell footer-grid">
        <div className="footer-brand" data-animate="footer-item">
          <CactusMark size={54} body="#24b83d" />
          <div>
            <strong>{company.brand}</strong>
            <p>
              Aplicativos, sistemas web e produtos digitais para empresas que precisam de
              confiabilidade, design e operação.
            </p>
          </div>
        </div>

        <div className="footer-links" data-animate="footer-item">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/politica-de-privacidade">Privacidade</Link>
        </div>

        <div className="footer-company" data-animate="footer-item">
          <span>{company.legalName}</span>
          <span>CNPJ {company.cnpj}</span>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a href="tel:+5566996194231">{company.phone}</a>
          <span>{company.location}</span>
        </div>
      </div>
    </footer>
  );
}

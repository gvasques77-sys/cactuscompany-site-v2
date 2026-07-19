import Link from "next/link";
import { CactusMark } from "@/components/cactus-mark";
import { company, navItems } from "@/components/company-data";
import { AppleGlyph, PlayGlyph } from "@/components/icons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-shell">
        <div className="footer-top">
          <div className="footer-brand" data-animate="footer-item">
            <div className="lock">
              <CactusMark size={40} />
              <strong>{company.brand}</strong>
            </div>
            <p>
              Aplicativos, sistemas web e produtos digitais para empresas que precisam de
              confiabilidade, design e operação.
            </p>
            <div className="footer-badges">
              <a href={company.appStore} target="_blank" rel="noopener" className="footer-badge">
                <AppleGlyph size={17} />
                App Store
              </a>
              <a href={company.playStore} target="_blank" rel="noopener" className="footer-badge">
                <PlayGlyph size={15} />
                Google Play
              </a>
            </div>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <span className="ct">Empresa</span>
              <Link href="/#empresa">Sobre</Link>
              <Link href="/#solucoes">Soluções</Link>
              <Link href="/contato">Contato</Link>
            </div>
            <div className="footer-col">
              <span className="ct">Produto</span>
              <Link href="/produtos">Frequência Internato</Link>
              <Link href="/produtos#seguranca">Segurança</Link>
              <Link href="/politica-de-privacidade">Política de privacidade</Link>
            </div>
            <div className="footer-col">
              <span className="ct">Contato</span>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <a href={`tel:${company.phoneIntl}`}>{company.phone}</a>
              <span>Cuiabá · MT · Brasil</span>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          © {new Date().getFullYear()} {company.legalName} · CNPJ {company.cnpj} · Cuiabá, MT ·{" "}
          {company.domain}
        </div>
      </div>
    </footer>
  );
}

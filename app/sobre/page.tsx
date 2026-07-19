import type { Metadata } from "next";
import { company } from "@/components/company-data";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a Cactus Company, marca operada pela GV TECNOLOGIA LTDA.",
};

export default function SobrePage() {
  return (
    <section className="section section-bg" style={{ paddingTop: "clamp(88px,10vw,128px)" }}>
      <div className="container-shell">
        <div className="section-head" data-animate="fade-up">
          <span className="eyebrow">Sobre</span>
          <h2>Cactus Company</h2>
          <p className="lead">
            A {company.brand} é uma marca operada pela {company.legalName}, empresa brasileira de
            tecnologia sediada em {company.location}. Desenvolvemos aplicativos, sistemas e produtos
            digitais para operações que precisam de confiança, clareza e evolução contínua.
          </p>
        </div>
        <div className="fact-grid" data-animate="fade-up">
          <div className="fact-card">
            <div className="k">Razão social</div>
            <div className="v">{company.legalName}</div>
          </div>
          <div className="fact-card">
            <div className="k">CNPJ</div>
            <div className="v">{company.cnpj}</div>
          </div>
          <div className="fact-card">
            <div className="k">Domínio</div>
            <div className="v">{company.domain}</div>
          </div>
          <div className="fact-card">
            <div className="k">Localização</div>
            <div className="v">Cuiabá, Mato Grosso · Brasil</div>
          </div>
        </div>
      </div>
    </section>
  );
}

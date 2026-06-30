import type { Metadata } from "next";
import { company } from "@/components/company-data";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a Cactus Company, marca operada pela GV TECNOLOGIA LTDA.",
};

export default function SobrePage() {
  return (
    <section className="apple-section">
      <div className="container-shell split-layout">
        <div data-animate="fade-up">
          <div className="eyebrow">Sobre</div>
          <h2>Cactus Company</h2>
        </div>
        <div className="section-copy" data-animate="fade-up">
          <p>
            A {company.brand} é uma marca operada pela {company.legalName}, empresa brasileira de
            tecnologia sediada em {company.location}. Desenvolvemos aplicativos, sistemas e produtos
            digitais para operações que precisam de confiança, clareza e evolução contínua.
          </p>
          <dl className="company-facts">
            <div>
              <dt>Razão social</dt>
              <dd>{company.legalName}</dd>
            </div>
            <div>
              <dt>CNPJ</dt>
              <dd>{company.cnpj}</dd>
            </div>
            <div>
              <dt>Domínio</dt>
              <dd>{company.domain}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

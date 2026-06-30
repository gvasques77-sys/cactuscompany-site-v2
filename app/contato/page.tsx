import type { Metadata } from "next";
import { company } from "@/components/company-data";

export const metadata: Metadata = {
  title: "Contato",
  description: "Contato empresarial da Cactus Company.",
};

export default function ContatoPage() {
  return (
    <section className="apple-section">
      <div className="container-shell split-layout">
        <div data-animate="fade-up">
          <div className="eyebrow">Contato empresarial</div>
          <h2>Fale com a Cactus Company.</h2>
        </div>
        <div className="section-copy" data-animate="fade-up">
          <p>
            Use os canais oficiais abaixo para contato corporativo, validações de plataforma,
            parcerias e implantação de produtos digitais.
          </p>
          <dl className="company-facts">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </dd>
            </div>
            <div>
              <dt>Telefone</dt>
              <dd>
                <a href="tel:+5566996194231">{company.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Empresa</dt>
              <dd>
                {company.legalName} • CNPJ {company.cnpj}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

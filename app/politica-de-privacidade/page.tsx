import type { Metadata } from "next";
import { company } from "@/components/company-data";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da Cactus Company.",
};

const topics = [
  "Tratamos dados necessários para atendimento, suporte, operação e segurança.",
  "Aplicamos minimização, finalidade e controles de acesso proporcionais.",
  "Solicitações sobre privacidade podem ser enviadas ao canal oficial de suporte.",
];

export default function PrivacidadePage() {
  return (
    <section className="apple-section">
      <div className="container-shell">
        <div className="section-heading" data-animate="fade-up">
          <div className="eyebrow">Privacidade</div>
          <h2>Política de Privacidade</h2>
        </div>
        <div className="capability-grid">
          {topics.map((topic) => (
            <article className="glass-card" key={topic} data-animate="card">
              <span className="card-line" />
              <p>{topic}</p>
            </article>
          ))}
        </div>
        <p className="section-copy" style={{ marginTop: 36 }}>
          Controladora: {company.legalName} • CNPJ {company.cnpj} • {company.email}
        </p>
      </div>
    </section>
  );
}

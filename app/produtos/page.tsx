import type { Metadata } from "next";
import Link from "next/link";
import { CactusMark } from "@/components/cactus-mark";

export const metadata: Metadata = {
  title: "Produto",
  description:
    "Conheça o Frequência Internato, produto da Cactus Company para validação de presença em instituições de ensino e saúde.",
};

const modules = [
  "Check-in por geolocalização",
  "Validação por preceptor",
  "Painel da coordenação",
  "Relatórios e trilha de auditoria",
];

const roles = [
  {
    title: "Aluno",
    text: "Registra presença, consulta escala e acompanha sua situação de frequência.",
  },
  {
    title: "Preceptor",
    text: "Valida presença, registra ocorrências e acompanha alunos em campo.",
  },
  {
    title: "Coordenação",
    text: "Monitora dados consolidados, filtros, relatórios e indicadores críticos.",
  },
];

export default function ProdutosPage() {
  return (
    <>
      <section className="product-showcase">
        <div className="container-shell product-shell">
          <div className="product-copy" data-animate="fade-up">
            <div className="eyebrow">Produto Cactus Company</div>
            <h2>Frequência Internato</h2>
            <p>
              Um app para instituições que precisam validar presença de internos e equipes em
              ambientes reais, reduzindo trabalho manual e aumentando rastreabilidade.
            </p>
            <ul>
              {modules.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href="/contato" className="primary-action compact" data-magnetic>
              Falar sobre implantação
            </Link>
          </div>

          <div className="phone-demo" data-animate="product-phone">
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="phone-top">
                  <span>9:41</span>
                  <CactusMark size={28} body="#24b83d" />
                </div>
                <div className="metric-card">
                  <span>presença hoje</span>
                  <strong>87%</strong>
                  <em>tempo real</em>
                </div>
                <div className="timeline-card">
                  <small>Plantão ativo</small>
                  <strong>Hospital Universitário</strong>
                  <span>18 alunos aguardando validação</span>
                  <button>Validar check-ins</button>
                </div>
                <div className="mini-row">
                  <span>Relatório</span>
                  <strong>exportação pronta</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="apple-section section-muted">
        <div className="container-shell">
          <div className="section-heading" data-animate="fade-up">
            <div className="eyebrow">Perfis de uso</div>
            <h2>Uma jornada para cada papel da operação.</h2>
          </div>
          <div className="capability-grid">
            {roles.map((role) => (
              <article className="glass-card" key={role.title} data-animate="card">
                <span className="card-line" />
                <h3>{role.title}</h3>
                <p>{role.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

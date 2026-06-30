import Link from "next/link";
import { CactusMark } from "@/components/cactus-mark";
import { company } from "@/components/company-data";

const proofItems = [
  { value: "B2B", label: "Soluções para instituições e operações críticas" },
  { value: "LGPD", label: "Privacidade, rastreabilidade e governança de dados" },
  { value: "App", label: "Produto próprio com validação de presença em tempo real" },
];

const capabilities = [
  {
    title: "Aplicativos corporativos",
    text: "Produtos móveis para fluxos operacionais, educação, saúde, produtividade e validação em campo.",
  },
  {
    title: "Sistemas web e painéis",
    text: "Dashboards, relatórios e interfaces administrativas para transformar dados em decisão.",
  },
  {
    title: "Experiências interativas",
    text: "Protótipos, simuladores e jornadas digitais para engajar usuários com clareza e propósito.",
  },
];

const productHighlights = [
  "Check-in com geolocalização e janela de horário",
  "Perfis para aluno, preceptor e coordenação",
  "Painel de presença, alertas e relatórios",
  "Rastro de auditoria para validações institucionais",
];

const security = [
  "Minimização de dados",
  "Controles de acesso por perfil",
  "Fluxos com finalidade definida",
  "Pronto para evolução com requisitos de parceiros",
];

export default function Home() {
  return (
    <>
      <section className="apple-hero" data-animate="hero">
        <div className="hero-noise" />
        <div className="hero-grid" />
        <div className="container-shell apple-hero-inner">
          <div className="hero-copy">
            <div className="eyebrow" data-animate="hero-item">
              Cactus Company • tecnologia corporativa
            </div>
            <h1 data-animate="hero-item">
              Software confiável para empresas que precisam operar com precisão.
            </h1>
            <p data-animate="hero-item">
              A {company.brand}, marca operada pela {company.legalName}, desenvolve aplicativos,
              sistemas web e produtos digitais para educação, saúde, produtividade e operações
              interativas.
            </p>
            <div className="hero-actions" data-animate="hero-item">
              <Link href="/produtos" className="primary-action" data-magnetic>
                Conhecer o produto
              </Link>
              <Link href="/contato" className="secondary-action" data-magnetic>
                Contato empresarial
              </Link>
            </div>
          </div>

          <div className="brand-stage" data-animate="hero-media" aria-hidden="true">
            <div className="stage-orbit orbit-one" />
            <div className="stage-orbit orbit-two" />
            <div className="brand-card">
              <CactusMark size={188} body="#24b83d" />
              <span>CACTUS COMPANY</span>
            </div>
            <div className="stage-chip chip-a">Apps</div>
            <div className="stage-chip chip-b">SaaS</div>
            <div className="stage-chip chip-c">LGPD</div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Destaques institucionais">
        <div className="container-shell proof-grid">
          {proofItems.map((item) => (
            <article key={item.value} data-animate="card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="empresa" className="apple-section">
        <div className="container-shell split-layout">
          <div data-animate="fade-up">
            <div className="eyebrow">A empresa</div>
            <h2>Uma software company brasileira preparada para validações corporativas.</h2>
          </div>
          <div className="section-copy" data-animate="fade-up">
            <p>
              Construímos produtos digitais com documentação, consistência visual, presença
              institucional e postura técnica adequada para parceiros, plataformas, D-U-N-S, Apple
              Developer e relações B2B.
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
                <dt>Localização</dt>
                <dd>{company.location}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="solucoes" className="apple-section section-muted">
        <div className="container-shell">
          <div className="section-heading" data-animate="fade-up">
            <div className="eyebrow">O que desenvolvemos</div>
            <h2>Do aplicativo ao painel executivo, com a mesma atenção ao detalhe.</h2>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="glass-card" key={item.title} data-animate="card">
                <span className="card-line" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="produto" className="product-showcase">
        <div className="container-shell product-shell">
          <div className="product-copy" data-animate="fade-up">
            <div className="eyebrow">Produto em destaque</div>
            <h2>Frequência Internato</h2>
            <p>
              Um produto para instituições de ensino e saúde acompanharem presença, estágios e
              validações do internato com mais controle e menos trabalho manual.
            </p>
            <ul>
              {productHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href="/produtos" className="primary-action compact" data-magnetic>
              Ver protótipo interativo
            </Link>
          </div>

          <div className="phone-demo" data-animate="product-phone" aria-label="Prévia do produto">
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="phone-top">
                  <span>9:41</span>
                  <strong>Marina Alves</strong>
                </div>
                <div className="metric-card">
                  <span>frequência</span>
                  <strong>94%</strong>
                  <em>Em dia</em>
                </div>
                <div className="timeline-card">
                  <small>07:00</small>
                  <strong>Plantão • Clínica Médica</strong>
                  <span>Hospital Universitário • Ala B</span>
                  <button>Fazer check-in</button>
                </div>
                <div className="mini-row">
                  <span>Preceptor</span>
                  <strong>validação pendente</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="seguranca" className="apple-section">
        <div className="container-shell split-layout">
          <div data-animate="fade-up">
            <div className="eyebrow">Privacidade e segurança</div>
            <h2>Projetado para confiança desde a primeira conversa.</h2>
          </div>
          <div className="security-grid">
            {security.map((item) => (
              <div key={item} data-animate="card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="final-cta">
        <div className="container-shell" data-animate="fade-up">
          <CactusMark size={84} body="#24b83d" />
          <h2>Vamos conversar sobre o próximo produto digital da sua operação?</h2>
          <p>
            Atendimento empresarial por {company.email} ou {company.phone}. Domínio oficial:{" "}
            {company.domain}.
          </p>
          <Link href="/contato" className="primary-action" data-magnetic>
            Falar com a Cactus Company
          </Link>
        </div>
      </section>
    </>
  );
}

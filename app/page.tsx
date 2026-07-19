import Link from "next/link";
import Image from "next/image";
import { company, demoMailto } from "@/components/company-data";
import { ArrowRight, Shield } from "@/components/icons";

const capabilities = [
  {
    title: "Aplicativos corporativos",
    text: "Produtos móveis para fluxos operacionais, educação, saúde, produtividade e validação em campo.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 18h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Sistemas web e painéis",
    text: "Dashboards, relatórios e interfaces administrativas para transformar dados em decisão.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 9h18M8 21h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Experiências interativas",
    text: "Protótipos, simuladores e jornadas digitais para engajar usuários com clareza e propósito.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
];

const productHighlights = [
  { strong: "Check-in com geolocalização", rest: " e janela de horário validados no servidor." },
  { strong: "Perfis", rest: " para aluno, preceptor e coordenação." },
  { strong: "Painel de presença", rest: ", alertas e relatórios de carga horária." },
  { strong: "Rastro de auditoria", rest: " para validações institucionais." },
];

const securityTeaser = [
  {
    label: "Minimização de dados",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V5l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Controles de acesso por perfil",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5 21a7 7 0 0114 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Fluxos com finalidade definida",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Pronto para requisitos de parceiros",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l8 4v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V7l8-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <section className="hero" data-animate="hero">
        <div className="hero-blob one" />
        <div className="hero-blob two" />
        <div className="hero-dots" />
        <div className="container-wide hero-inner">
          <div className="hero-copy">
            <span className="eyebrow-pill" data-animate="hero-item">
              Cactus Company · tecnologia corporativa
            </span>
            <h1 data-animate="hero-item">
              Software confiável para empresas que operam com precisão.
            </h1>
            <p data-animate="hero-item">
              Marca operada pela {company.legalName}. Desenvolvemos aplicativos, sistemas web e
              produtos digitais para educação, saúde, produtividade e operações críticas — com
              documentação, segurança e postura institucional.
            </p>
            <div className="hero-actions" data-animate="hero-item">
              <Link href="/produtos" className="btn btn-accent" data-magnetic>
                Conhecer o produto <ArrowRight />
              </Link>
              <a href={`mailto:${company.email}?subject=Contato%20empresarial%20%E2%80%94%20Cactus%20Company`} className="btn btn-ghost" data-magnetic>
                Falar com a Cactus
              </a>
            </div>
            <div className="hero-meta" data-animate="hero-item">
              <span className="with-icon">
                <Shield size={15} /> Dados hospedados no Brasil
              </span>
              <span className="dot" />
              <span>
                {company.legalName} · CNPJ {company.cnpj}
              </span>
              <span className="dot" />
              <span>Cuiabá · MT · Brasil</span>
            </div>
          </div>

          <div className="hero-stage" data-animate="hero-media">
            <div className="phone-float">
              <div className="phone-bezel">
                <Image src="/images/app-home.jpg" alt="Tela inicial do app Frequência Internato" width={280} height={606} priority />
              </div>
              <div className="float-chip a">
                <span className="ic light">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>
                  <span className="t">GPS validado</span>
                  <span className="s">no servidor</span>
                </span>
              </div>
              <div className="float-chip b">
                <span className="ic dark">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
                <span>
                  <span className="t">Log imutável</span>
                  <span className="s">append-only</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="empresa" className="section section-bg">
        <div className="container-shell">
          <div className="section-head" data-animate="fade-up">
            <span className="eyebrow">A empresa</span>
            <h2>Uma software company brasileira preparada para validações corporativas.</h2>
            <p className="lead">
              Construímos produtos digitais com documentação, consistência visual, presença
              institucional e postura técnica adequada para parceiros, plataformas, D-U-N-S, Apple
              Developer e relações B2B.
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
              <div className="k">Localização</div>
              <div className="v">Cuiabá, Mato Grosso · Brasil</div>
            </div>
          </div>
        </div>
      </section>

      <section id="solucoes" className="section section-white">
        <div className="container-shell">
          <div className="section-head" data-animate="fade-up">
            <span className="eyebrow">O que desenvolvemos</span>
            <h2>Do aplicativo ao painel executivo, com a mesma atenção ao detalhe.</h2>
          </div>
          <div className="card-grid">
            {capabilities.map((item) => (
              <article className="feature-card" key={item.title} data-animate="card">
                <span className="feature-icon dark">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container-shell split">
          <div className="col-copy" data-animate="fade-up">
            <span className="eyebrow">Produto em destaque</span>
            <h2>Frequência Internato</h2>
            <p className="lead">
              Um produto para instituições de ensino e saúde acompanharem presença, estágios e
              validações do internato com mais controle e menos trabalho manual.
            </p>
            <div className="checklist">
              {productHighlights.map((item) => (
                <div className="checklist-item" key={item.strong}>
                  <span className="tick">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>
                    <strong>{item.strong}</strong>
                    {item.rest}
                  </span>
                </div>
              ))}
            </div>
            <Link href="/produtos" className="btn btn-primary" data-magnetic style={{ marginTop: 30 }}>
              Ver o produto <ArrowRight />
            </Link>
          </div>
          <div className="col-media" data-animate="product-phone">
            <div className="phone-float">
              <div className="phone-bezel">
                <Image src="/images/app-escala.jpg" alt="Tela de escala e plantões do app" width={280} height={606} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="seguranca" className="section section-bg">
        <div className="container-shell">
          <div className="section-head" data-animate="fade-up">
            <span className="eyebrow">Privacidade e segurança</span>
            <h2>Projetado para confiança desde a primeira conversa.</h2>
          </div>
          <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))" }}>
            {securityTeaser.map((item) => (
              <div className="feature-card on-white" key={item.label} data-animate="card">
                <span style={{ color: "var(--green)", display: "block", marginBottom: 14 }}>{item.icon}</span>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "var(--ink)" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <div data-animate="fade-up" style={{ marginTop: 26 }}>
            <Link href="/produtos#seguranca" className="btn btn-primary" data-magnetic style={{ background: "transparent", color: "var(--green)", boxShadow: "none", padding: "6px 0" }}>
              Ver segurança em detalhe <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section id="contato" className="cta-band">
        <div className="cta-inner" data-animate="fade-up">
          <div className="blob" />
          <div className="cta-row">
            <div className="c">
              <h2>Vamos conversar sobre o próximo produto digital da sua operação?</h2>
              <p>
                Atendimento empresarial por {company.email} · {company.phone}.
              </p>
            </div>
            <a href={demoMailto} className="btn btn-accent" data-magnetic>
              Falar com a Cactus
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { company, demoMailto } from "@/components/company-data";
import { ArrowRight, Shield, AppleGlyph, PlayGlyph } from "@/components/icons";

export const metadata: Metadata = {
  title: "Frequência Internato",
  description:
    "A frequência do internato à prova de fraude e à prova de auditoria: check-in com GPS validado no servidor, log imutável e relatório de carga horária pronto para auditoria.",
};

const problema = [
  "O aluno carrega a mesma sulfite por oito semanas, juntando assinatura e carimbo a cada plantão.",
  "Se a folha se perde, semanas de campo viram risco de reprovação — e não há como reconstruir o histórico.",
  "No fim do rodízio, a coordenação recolhe tudo e consolida à mão, uma linha de cada vez.",
];

const solucao = [
  {
    title: "Validação que não depende de confiança",
    text: "GPS e janela de horário são conferidos no servidor. O registro só existe quando as condições batem.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V5l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Auditoria pronta a qualquer momento",
    text: "Cada presença vira um registro imutável. O relatório de carga horária está sempre disponível, não só no fim do rodízio.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M8 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2" stroke="currentColor" strokeWidth="1.8" />
        <rect x="8" y="2" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 14l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Coordenação sem consolidação manual",
    text: "Presença, escala, carga horária e alertas se atualizam sozinhos, por aluno e por rodízio.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M4 20V11M9.5 20V5M15 20v-8M20.5 20V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Cada perfil vê só o que lhe compete",
    text: "Seis perfis, do coordenador ao representante, cada um com o escopo certo de acesso.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3.5 19a5.5 5.5 0 0111 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 7l2 2 3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const passos = [
  { n: "01", title: "O aluno registra o check-in no plantão", text: "Pelo app, com confirmação biométrica local do próprio aparelho." },
  { n: "02", title: "O servidor valida local e janela de horário", text: "A decisão é do servidor. Sem GPS válido ou fora do horário, não há registro." },
  { n: "03", title: "A coordenação acompanha em tempo real", text: "Tudo entra num log imutável, pronto para consultar e auditar quando precisar." },
];

const camadas = [
  {
    n: "1",
    title: "Biometria do próprio aparelho",
    text: "Confirmação local, feita pelo sistema operacional. Nenhum dado biométrico é coletado, transmitido ou armazenado.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 11a3 3 0 013 3v1M8 8a5.5 5.5 0 018.4 4.6M6 12v2a6 6 0 001 3.3M12 4a8 8 0 018 8v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "2",
    title: "Impressão do dispositivo",
    text: "Cada aparelho tem uma identificação. A troca de dispositivo fica registrada em auditoria.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="1.7" />
        <path d="M10 6h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "3",
    title: "Sessão única ativa",
    text: "Uma sessão por usuário, atrelada ao dispositivo. Sem acesso simultâneo em vários aparelhos.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="15" r="4" stroke="currentColor" strokeWidth="1.7" />
        <path d="M11 12l9-9M17 3l3 3M14 6l2 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "4",
    title: "GPS + janela validados no servidor",
    text: "A decisão de aceitar ou recusar é do servidor, nunca do aplicativo. Sem GPS válido ou fora da janela, não há registro.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 21s-7-4.5-7-10a7 7 0 0114 0c0 5.5-7 10-7 10z" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="11" r="2.4" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    n: "5",
    title: "Log imutável, append-only",
    text: "O registro não se apaga nem se reescreve. Correções entram como um novo registro, preservando todo o histórico.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4 9h16M8 13h8M8 16.5h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
];

const bars = [
  { label: "Clínica Médica", value: "96%" },
  { label: "Cirurgia Geral", value: "93%" },
  { label: "Pediatria", value: "89%" },
  { label: "Pronto-socorro", value: "91%" },
];

const faq = [
  {
    q: "E se o aluno tentar burlar o GPS?",
    a: "A decisão de aceitar ou recusar o check-in é do servidor, não do aplicativo. Sem GPS válido dentro da janela de horário, o registro não acontece. A troca de aparelho fica registrada em auditoria e cada usuário tem uma única sessão ativa, atrelada ao dispositivo.",
  },
  {
    q: "Como fica a LGPD e a biometria?",
    a: "A biometria é uma confirmação local do próprio sistema operacional do aparelho — nenhum dado biométrico é coletado, transmitido ou armazenado. A localização é lida apenas no instante do check-in, nunca em segundo plano. Adotamos coleta mínima de dados e mantemos a política de privacidade publicada.",
  },
  {
    q: "O preceptor precisa fazer alguma coisa?",
    a: "Não. Professores e coordenadores não fazem check-in — quem registra a presença é o aluno. O preceptor e a coordenação acompanham os registros e as validações pelo painel, no ritmo que preferirem.",
  },
  {
    q: "E se não houver sinal no hospital?",
    a: "O check-in é validado no servidor, então depende de conexão no momento do registro. Em locais de sinal instável, esse ponto é tratado na configuração da instituição — é um dos itens que ajustamos junto com a coordenação durante a implantação.",
  },
  {
    q: "Integra com o sistema acadêmico?",
    a: "O produto entrega relatórios de carga horária exportáveis por aluno e por rodízio. A integração direta com o sistema acadêmico é avaliada caso a caso e faz parte da conversa de implantação.",
  },
];

const implantacao = [
  {
    title: "Implantação na virada de semestre",
    text: "Entramos na janela natural entre um semestre e outro, junto com o calendário acadêmico.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Taxa de implantação + mensalidade",
    text: "Um valor de implantação e uma mensalidade fixa por faixa de usuários. O preço fechado vai na proposta.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7v10M14.5 9.5c0-1-1.1-1.6-2.5-1.6s-2.5.6-2.5 1.7 1.1 1.5 2.5 1.7 2.5.7 2.5 1.8-1.1 1.6-2.5 1.6-2.5-.6-2.5-1.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "O que está incluso",
    text: "Configuração da instituição, cadastro inicial, treinamento das equipes e suporte.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ProdutosPage() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: "clamp(56px,7vw,88px)" }} data-animate="hero">
        <div className="hero-blob one" />
        <div className="hero-dots" />
        <div className="container-wide hero-inner">
          <div className="hero-copy">
            <span className="eyebrow-pill" data-animate="hero-item">
              <Shield size={16} /> Frequência Internato
            </span>
            <h1 data-animate="hero-item">A frequência do internato à prova de fraude e à prova de auditoria.</h1>
            <p data-animate="hero-item">
              Check-in com GPS validado no servidor e log imutável — relatório de carga horária
              pronto para a auditoria.
            </p>
            <div className="hero-actions" data-animate="hero-item">
              <a href={demoMailto} className="btn btn-accent" data-magnetic>
                Agendar demonstração de 20 min <ArrowRight />
              </a>
            </div>
          </div>
          <div className="hero-stage" data-animate="product-phone">
            <div className="phone-float">
              <div className="phone-bezel">
                <Image src="/images/app-home.jpg" alt="Tela inicial do app Frequência Internato" width={280} height={606} priority />
              </div>
              <div className="float-chip a" style={{ top: 64 }}>
                <span className="ic light">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21s-7-4.5-7-10a7 7 0 0114 0c0 5.5-7 10-7 10z" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </span>
                <span>
                  <span className="t">Check-in aceito</span>
                  <span className="s">GPS + janela OK</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="store-strip">
        <div className="row">
          <a href={company.appStore} target="_blank" rel="noopener" className="store-badge">
            <AppleGlyph size={22} />
            <span>
              <span className="lbl">Baixar na</span>
              <span className="name">App Store</span>
            </span>
          </a>
          <a href={company.playStore} target="_blank" rel="noopener" className="store-badge">
            <PlayGlyph size={20} />
            <span>
              <span className="lbl">Disponível no</span>
              <span className="name">Google Play</span>
            </span>
          </a>
          <span className="store-note">
            <Shield size={16} /> Dados hospedados no Brasil
          </span>
          <span className="store-note muted">
            {company.legalName} · CNPJ {company.cnpj}
          </span>
        </div>
      </section>

      <section className="section section-white">
        <div className="container-shell" style={{ maxWidth: 900 }}>
          <div data-animate="fade-up">
            <span className="eyebrow">O problema</span>
            <h2 style={{ maxWidth: 640 }}>Hoje, o registro de presença do internato ainda mora numa folha de papel.</h2>
            <div className="text-cols">
              {problema.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container-shell">
          <div className="section-head" data-animate="fade-up">
            <span className="eyebrow">A solução</span>
            <h2>Da folha de papel ao registro digital auditável.</h2>
          </div>
          <div className="card-grid">
            {solucao.map((item) => (
              <article className="feature-card on-white" key={item.title} data-animate="card">
                <span className="feature-icon tint">{item.icon}</span>
                <h3 style={{ fontSize: 18 }}>{item.title}</h3>
                <p style={{ fontSize: 14.5 }}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container-shell" style={{ maxWidth: 1000 }}>
          <div className="section-head" data-animate="fade-up">
            <span className="eyebrow">Como funciona</span>
            <h2>Três passos, um registro que se sustenta.</h2>
          </div>
          <div className="step-grid">
            {passos.map((s) => (
              <div className="step-card" key={s.n} data-animate="card">
                <div className="n">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="seguranca" className="section section-dark">
        <div className="container-shell">
          <div className="section-head" data-animate="fade-up">
            <span className="eyebrow eyebrow-light">Segurança e LGPD</span>
            <h2>A seção que a sua TI vai querer ler.</h2>
            <p className="lead">
              Cada check-in passa por cinco camadas de validação — descritas exatamente como
              funcionam.
            </p>
          </div>
          <div className="sec-grid">
            {camadas.map((c) => (
              <div className="sec-card" key={c.n} data-animate="card">
                <div className="head">
                  <span className="num">{c.n}</span>
                  <span>{c.icon}</span>
                </div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
            <div className="sec-card highlight" data-animate="card">
              <div className="sec-mini">
                <span className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="10" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M7 10V7a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </span>
                <div>
                  <div className="t">Isolamento por instituição</div>
                  <div className="s">Row Level Security: os dados de uma instituição são inacessíveis a qualquer outra.</div>
                </div>
              </div>
              <div className="sec-mini">
                <span className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="7" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <rect x="3" y="13" width="18" height="7" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M7 7.5h.01M7 16.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <div className="t">Infraestrutura no Brasil</div>
                  <div className="s">Hospedagem em São Paulo, dentro do país.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lgpd-note" data-animate="fade-up">
            <p>
              <strong>LGPD por padrão:</strong> coleta mínima de dados e localização lida só no
              instante do check-in, nunca em segundo plano. Referência factual: a Portaria MEC nº
              360/2022 veda a criação de novos registros acadêmicos físicos.
            </p>
            <a href="/politica-de-privacidade">
              Política de privacidade{" "}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container-shell">
          <div className="section-head" data-animate="fade-up">
            <span className="eyebrow">Painel da coordenação</span>
            <h2>A coordenação enxerga tudo em um só painel.</h2>
            <p className="lead">
              Presença por rodízio, faltas, atrasos e carga horária — com filtros por rodízio,
              semestre e status. É o mesmo dado que vai para a auditoria, sem planilha e sem
              consolidação manual.
            </p>
          </div>
          <div className="window" data-animate="fade-up">
            <div className="window-bar">
              <span className="d" style={{ background: "#FF5F57" }} />
              <span className="d" style={{ background: "#FEBC2E" }} />
              <span className="d" style={{ background: "#28C840" }} />
              <span className="window-url">frequencia-internato-web.vercel.app</span>
            </div>
            <div className="window-tabs">
              <span className="title">
                <span style={{ color: "var(--green)" }}>Frequência</span> · Painel
              </span>
              <span className="tabs">
                <span>Início</span>
                <span>Rodízios</span>
                <span className="active">Relatórios</span>
                <span>Conflitos</span>
                <span>Capacidade</span>
              </span>
              <span className="user">
                <span>ic.demo@univag.test</span>
                <span className="out">Sair</span>
              </span>
            </div>
            <div className="window-body">
              <div className="h">Relatórios</div>
              <div className="sub">Frequência agregada do internato · Univag</div>
              <div className="legend">
                <span className="all">Todos</span>
                <span className="k"><span className="dot" style={{ background: "#2EA36F" }} />Presente</span>
                <span className="k"><span className="dot" style={{ background: "#E09820" }} />Atraso</span>
                <span className="k"><span className="dot" style={{ background: "#DC3535" }} />Falta</span>
                <span className="k"><span className="dot" style={{ background: "#2A7ADB" }} />Justificada</span>
              </div>
              <div className="stat-grid">
                <div className="stat">
                  <div className="top"><span>Frequência geral</span><span className="dot" style={{ background: "#2EA36F" }} /></div>
                  <div className="num">94%</div>
                  <div className="cap">no semestre</div>
                </div>
                <div className="stat">
                  <div className="top"><span>Presentes</span><span className="dot" style={{ background: "#2EA36F" }} /></div>
                  <div className="num">312</div>
                  <div className="cap">registros</div>
                </div>
                <div className="stat">
                  <div className="top"><span>Atrasos</span><span className="dot" style={{ background: "#E09820" }} /></div>
                  <div className="num">6</div>
                  <div className="cap">registros</div>
                </div>
                <div className="stat">
                  <div className="top"><span>Faltas</span><span className="dot" style={{ background: "#DC3535" }} /></div>
                  <div className="num">4</div>
                  <div className="cap">registros</div>
                </div>
              </div>
              <div className="bars">
                <div className="h">Comparativo por rodízio</div>
                <div className="bar-list">
                  {bars.map((b) => (
                    <div className="bar-row" key={b.label}>
                      <div className="lbl">
                        <span>{b.label}</span>
                        <span>{b.value}</span>
                      </div>
                      <div className="bar-track">
                        <div className="bar-fill" data-w={b.value} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container-shell" style={{ maxWidth: 840 }}>
          <div className="section-head center" data-animate="fade-up">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2>Respostas diretas, sem marketing.</h2>
          </div>
          <div className="faq" data-animate="fade-up">
            {faq.map((item) => (
              <details key={item.q}>
                <summary>
                  <span className="q">{item.q}</span>
                  <span className="chv">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container-shell">
          <div className="section-head" data-animate="fade-up">
            <span className="eyebrow">Implantação e modelo comercial</span>
            <h2>Entramos junto com o calendário — sem correria, sem preço na tela.</h2>
          </div>
          <div className="card-grid">
            {implantacao.map((item) => (
              <article className="feature-card" key={item.title} data-animate="card">
                <span style={{ color: "var(--green)", display: "block", marginBottom: 14 }}>{item.icon}</span>
                <h3 style={{ fontSize: 18, margin: 0 }}>{item.title}</h3>
                <p style={{ fontSize: 14.5 }}>{item.text}</p>
              </article>
            ))}
          </div>
          <div data-animate="fade-up" style={{ marginTop: 36, textAlign: "center" }}>
            <a href={demoMailto} className="btn btn-primary" data-magnetic>
              Agendar demonstração de 20 min <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

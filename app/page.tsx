import Image from "next/image";
import Link from "next/link";
import { CinematicLoop } from "@/components/cinematic-loop";
import { company, intelligenceMailto } from "@/components/company-data";
import { ArrowRight, Shield } from "@/components/icons";
import { RaioxDemo } from "@/components/raiox-demo";

const confidenceSignals = [
  "Dados da própria instituição",
  "Leitura por turma, área e aluno",
  "Prioridades explicáveis",
  "Planos de ação rastreáveis",
];

const externalPrep = [
  "Atuação concentrada nos últimos meses",
  "Conteúdo igual para realidades diferentes",
  "Inteligência fora da instituição",
  "Efeito pontual que termina com o contrato",
];

const cactusIntelligence = [
  "Diagnóstico contínuo ao longo do curso",
  "Decisões baseadas nos dados internos",
  "Inteligência acumulada a cada semestre",
  "Melhoria estrutural que permanece",
];

const diagnosticPath = [
  {
    code: "INST",
    title: "Instituição",
    text: "A trajetória do curso e a referência interna de acompanhamento.",
  },
  {
    code: "TURM",
    title: "Turmas",
    text: "Coortes comparadas para localizar onde o desempenho se distancia.",
  },
  {
    code: "ÁREA",
    title: "Áreas ENAMED",
    text: "Fragilidades reveladas por área de conhecimento e sustentação amostral.",
  },
  {
    code: "ALUNO",
    title: "Alunos",
    text: "Histórico, frequência, simulados e evolução reunidos em uma leitura individual.",
  },
  {
    code: "AÇÃO",
    title: "Intervenções",
    text: "Prioridade, responsável, prazo e impacto esperado em um plano rastreável.",
  },
];

const ecosystem = [
  {
    label: "Capturar",
    title: "A operação produz a evidência.",
    items: "Frequência · avaliações · simulados · escalas · rodízios · preceptoria",
  },
  {
    label: "Interpretar",
    title: "O Raio-X encontra o sinal.",
    items: "Análise longitudinal · turmas · áreas ENAMED · risco acadêmico",
  },
  {
    label: "Agir",
    title: "A gestão assume a prioridade.",
    items: "Alertas · reforço direcionado · responsáveis · prazos · acompanhamento",
  },
  {
    label: "Aprender",
    title: "A instituição preserva inteligência.",
    items: "Histórico · comparação entre períodos · auditoria · melhoria contínua",
  },
];

const outcomes = [
  {
    label: "Antecipar",
    title: "Risco acadêmico visível antes do resultado oficial.",
  },
  {
    label: "Sustentar",
    title: "Qualidade do curso construída com aprendizado acumulado.",
  },
  {
    label: "Formar",
    title: "Alunos preparados para o ENAMED, a residência e a prática médica.",
  },
];

const securityItems = [
  "Isolamento dos dados por instituição",
  "Controle de acesso por perfil",
  "Trilha de auditoria",
  "Coleta mínima e finalidade definida",
];

const productStories = [
  {
    label: "Visão institucional",
    title: "Uma nota. Uma população. Uma prioridade.",
    text: "A coordenação enxerga o desempenho do curso, quem já alcançou o corte e onde uma intervenção rende mais.",
    image: "/images/raio-x/institutional-overview.png",
    alt: "Visão institucional do Raio-X ENAMED com nota média, alunos no corte e prioridades de ação",
    width: 2364,
    height: 1608,
  },
  {
    label: "Leitura transversal",
    title: "Acerto, persistência, sobreposição.",
    text: "Três sinais transformam uma lacuna dispersa em um grupo de reforço com critério.",
    image: "/images/raio-x/diagnostic-indices.png",
    alt: "Painel do Raio-X ENAMED com índices diagnósticos e concentração de lacunas por tema e turma",
    width: 2360,
    height: 1604,
  },
  {
    label: "Intervenção precisa",
    title: "O mesmo tema. Casos diferentes.",
    text: "A sobreposição separa quem precisa de um encontro pontual de quem exige acompanhamento individual.",
    image: "/images/raio-x/intervention-composition.png",
    alt: "Composição de um grupo de reforço por aluno, turma, distância do corte e outras revisões",
    width: 1028,
    height: 788,
  },
  {
    label: "Ciclo fechado",
    title: "Ação que prova efeito.",
    text: "A plataforma compara o mesmo grupo, no mesmo tema, antes e depois do reforço.",
    image: "/images/raio-x/closed-loop.png",
    alt: "Resultado de um ciclo de intervenção comparando o desempenho antes e depois do reforço",
    width: 880,
    height: 610,
  },
  {
    label: "Memória acadêmica",
    title: "Histórico que separa padrão de ruído.",
    text: "Quatro semestres de evidência distinguem uma prova ruim de uma fragilidade recorrente.",
    image: "/images/raio-x/student-history.png",
    alt: "Pontos fortes e frágeis históricos de um aluno no Raio-X ENAMED",
    width: 1962,
    height: 666,
  },
  {
    label: "Raio-X individual",
    title: "Do curso ao indivíduo.",
    text: "A coordenação chega ao nome, à trajetória e à próxima ação sem perder o contexto institucional.",
    image: "/images/raio-x/student-record.png",
    alt: "Ficha individual do aluno com trajetória, alertas e revisões temáticas",
    width: 2366,
    height: 1524,
  },
];

export default function Home() {
  return (
    <div className="intelligence-home">
      <section className="intelligence-hero" id="inicio" data-animate="hero">
        <div className="diagnostic-grid" aria-hidden="true" />
        <div className="container-wide intelligence-hero-grid">
          <div className="intelligence-hero-copy">
            <p className="system-label" data-animate="hero-item">
              Inteligência institucional para educação médica
            </p>
            <h1 data-animate="hero-item">
              A nota do ENAMED não começa na prova.
              <span>Começa nos dados que sua instituição já tem.</span>
            </h1>
            <p className="hero-thesis" data-animate="hero-item">
              A Cactus conecta avaliações, simulados, frequência, rodízios e histórico acadêmico
              para revelar onde o curso perde desempenho — e o que fazer antes que isso vire
              resultado oficial.
            </p>
            <div className="hero-actions" data-animate="hero-item">
              <a href="#raio-x" className="btn btn-accent" data-magnetic>
                Ver o Raio-X em ação <ArrowRight />
              </a>
              <a href={intelligenceMailto} className="btn btn-ghost" data-magnetic>
                Solicitar diagnóstico
              </a>
            </div>
            <div className="hero-proof" data-animate="hero-item">
              <span className="proof-status" aria-hidden="true" />
              <span>Produto operacional</span>
              <span className="proof-separator" />
              <span>Dados ilustrativos na demonstração</span>
            </div>
          </div>

          <div className="hero-console" data-animate="hero-media">
            <div className="console-head">
              <div className="console-id">
                <span>CACTUS / RAIO-X ENAMED</span>
                <strong>Visão institucional</strong>
              </div>
              <a href="/raio-x-enamed" target="_blank" rel="noopener" className="console-open">
                Abrir painel <span aria-hidden="true">↗</span>
              </a>
            </div>
            <CinematicLoop />
            <div className="xray-scan" aria-hidden="true">
              <span />
            </div>
            <div className="scan-caption" aria-hidden="true">
              <span>VARREDURA INSTITUCIONAL</span>
              <span>INST → TURMA → ÁREA → ALUNO → AÇÃO</span>
            </div>
          </div>
        </div>

        <div className="container-wide confidence-strip" aria-label="Características da plataforma">
          {confidenceSignals.map((signal) => (
            <span key={signal}>{signal}</span>
          ))}
        </div>
      </section>

      <section className="manifesto-section" id="inteligencia">
        <div className="container-shell manifesto-grid">
          <div className="manifesto-statement" data-animate="fade-up">
            <p className="system-label dark-label">O problema não é falta de conteúdo</p>
            <h2>Comprar preparação no fim da linha é tratar o sintoma.</h2>
            <p>
              O resultado sustentável nasce quando a instituição aprende com os próprios dados.
              Preparações externas atuam nos últimos meses e levam o conhecimento embora com o
              contrato. A Cactus constrói capacidade institucional durante todo o curso.
            </p>
            <blockquote>
              Você pode comprar preparação por um semestre. Ou construir uma instituição que
              aprende para sempre.
            </blockquote>
          </div>

          <div className="decision-comparison" data-animate="fade-up">
            <div className="comparison-column external">
              <span className="comparison-kicker">Intervenção tardia</span>
              <h3>Comprar conteúdo</h3>
              <ul>
                {externalPrep.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="comparison-column intelligence">
              <span className="comparison-kicker">Capacidade institucional</span>
              <h3>Construir inteligência</h3>
              <ul>
                {cactusIntelligence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="product-command" id="raio-x">
        <div className="container-wide">
          <div className="product-heading" data-animate="fade-up">
            <div>
              <p className="system-label">Produto principal</p>
              <h2>Raio-X ENAMED.</h2>
            </div>
            <p>
              Do indicador institucional ao nome do aluno. Do nome à área frágil. Da fragilidade
              ao plano de ação.
            </p>
          </div>

          <div className="diagnostic-path" data-animate="fade-up">
            {diagnosticPath.map((step, index) => (
              <article className="path-step" key={step.code}>
                <div className="path-code">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step.code}</strong>
                </div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="live-diagnostic" data-animate="fade-up">
            <div className="live-diagnostic-head">
              <div>
                <span className="live-indicator"><i /> Demonstração interativa</span>
                <h3>O curso inteiro, sem pontos cegos.</h3>
              </div>
              <div className="live-actions">
                <span>Dados ilustrativos</span>
                <a href="/raio-x-enamed" target="_blank" rel="noopener">
                  Tela cheia <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <RaioxDemo interactive />
          </div>

          <div className="explainable-note" data-animate="fade-up">
            <span className="explainable-mark">?</span>
            <p>
              <strong>Inteligência sem caixa-preta.</strong> Cada alerta mostra o dado que o gerou,
              a amostra considerada e o critério utilizado. As projeções são referências internas
              de acompanhamento — não previsões oficiais de nota.
            </p>
          </div>
        </div>
      </section>

      <section className="product-stories" aria-labelledby="product-stories-title">
        <div className="container-shell product-stories-intro" data-animate="fade-up">
          <p className="system-label dark-label">A inteligência em movimento</p>
          <h2 id="product-stories-title">Do sinal institucional à ação sobre cada aluno.</h2>
          <p>
            O Raio-X não entrega mais um relatório. Ele preserva a linha de raciocínio que transforma
            evidência em decisão — e decisão em resultado verificável.
          </p>
        </div>

        <div className="product-story-list">
          {productStories.map((story, index) => (
            <article className="product-story" data-story key={story.label}>
              <div className="product-story-copy">
                <div className="product-story-index" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i />
                  <span>06</span>
                </div>
                <p className="product-story-label">{story.label}</p>
                <h3>{story.title}</h3>
                <p className="product-story-text">{story.text}</p>
              </div>
              <figure className="product-story-media" data-story-media>
                <Image
                  src={story.image}
                  alt={story.alt}
                  width={story.width}
                  height={story.height}
                  quality={92}
                  loading="eager"
                  sizes="(max-width: 900px) 100vw, 68vw"
                />
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section className="data-asset-section">
        <div className="container-shell data-asset-grid">
          <div data-animate="fade-up">
            <p className="system-label dark-label">O ativo</p>
            <h2>
              O bem mais valioso da instituição não está no prédio.
              <span>Está na história acadêmica produzida todos os dias.</span>
            </h2>
          </div>
          <div className="asset-copy" data-animate="fade-up">
            <p>
              Avaliações, simulados, frequência, rodízios, preceptoria e intervenções formam um
              patrimônio que poucas instituições conseguem interpretar. A Cactus transforma esse
              patrimônio em memória, diagnóstico e decisão.
            </p>
            <strong>Dado guardado é arquivo. Dado interpretado é vantagem.</strong>
          </div>
        </div>

        <div className="container-wide data-pipeline" data-animate="fade-up" aria-label="Fluxo dos dados">
          {["Dado bruto", "Contexto", "Diagnóstico", "Prioridade", "Ação", "Memória institucional"].map(
            (item, index) => (
              <div className="pipeline-node" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            )
          )}
        </div>
      </section>

      <section className="ecosystem-section" id="ecossistema">
        <div className="container-shell">
          <div className="ecosystem-heading" data-animate="fade-up">
            <p className="system-label">Ecossistema Cactus</p>
            <h2>Inteligência só existe quando a operação inteira alimenta o mesmo sistema.</h2>
            <p>
              A frequência é uma fonte. O diagnóstico é o produto. A inteligência é o ecossistema.
            </p>
          </div>

          <div className="ecosystem-rail" data-animate="fade-up">
            {ecosystem.map((layer, index) => (
              <article className="ecosystem-layer" key={layer.label}>
                <div className="layer-index">0{index + 1}</div>
                <div className="layer-body">
                  <span>{layer.label}</span>
                  <h3>{layer.title}</h3>
                  <p>{layer.items}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="product-map" data-animate="fade-up">
            <div className="product-map-primary">
              <span>Núcleo de inteligência</span>
              <h3>Raio-X ENAMED</h3>
              <p>Diagnóstico institucional, priorização e intervenção.</p>
              <a href="#raio-x">Explorar o produto <ArrowRight size={16} /></a>
            </div>
            <div className="product-map-secondary">
              <div>
                <span>Gestão unificada</span>
                <strong>Painel Cactus</strong>
              </div>
              <div>
                <span>Captura operacional</span>
                <strong>Frequência Internato</strong>
              </div>
              <div>
                <span>Conexão institucional</span>
                <strong>Integrações acadêmicas</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="outcome-section">
        <div className="container-wide">
          <div className="outcome-heading" data-animate="fade-up">
            <p className="system-label dark-label">Resultado institucional</p>
            <h2>O ENAMED é o termômetro. Nós atuamos na temperatura.</h2>
            <p>
              O objetivo não é apenas preparar um aluno para uma prova. É revelar fragilidades
              enquanto ainda existe tempo para intervir, sustentar a qualidade do curso e formar
              médicos mais preparados para a prática profissional.
            </p>
          </div>
          <div className="outcome-grid" data-animate="fade-up">
            {outcomes.map((outcome) => (
              <article key={outcome.label}>
                <span>{outcome.label}</span>
                <h3>{outcome.title}</h3>
              </article>
            ))}
          </div>
          <p className="outcome-closing" data-animate="fade-up">
            A nota é consequência. <strong>A inteligência é infraestrutura.</strong>
          </p>
        </div>
      </section>

      <section className="sovereignty-section" id="seguranca">
        <div className="container-shell sovereignty-grid">
          <div className="sovereignty-copy" data-animate="fade-up">
            <p className="system-label">Segurança e soberania</p>
            <h2>Inteligência institucional exige controle sobre os dados.</h2>
            <p>
              Os dados, o histórico e o conhecimento produzido continuam pertencendo à
              instituição. A Cactus fornece a infraestrutura para transformar esse ativo em
              decisão sem retirar o controle de quem o construiu.
            </p>
            <Link href="/politica-de-privacidade" className="text-link">
              Conhecer nossa política de privacidade <ArrowRight size={16} />
            </Link>
          </div>
          <div className="security-ledger" data-animate="fade-up">
            <div className="ledger-head">
              <Shield size={20} />
              <span>Controles de confiança</span>
            </div>
            {securityItems.map((item, index) => (
              <div className="ledger-row" key={item}>
                <span>CTRL-{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
                <i>ATIVO</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="company-proof" id="empresa">
        <div className="container-shell company-proof-grid" data-animate="fade-up">
          <div>
            <p className="system-label dark-label">Cactus Company</p>
            <h2>Produto real. Operação brasileira. Responsabilidade identificada.</h2>
          </div>
          <dl>
            <div><dt>Razão social</dt><dd>{company.legalName}</dd></div>
            <div><dt>CNPJ</dt><dd>{company.cnpj}</dd></div>
            <div><dt>Sede</dt><dd>{company.location}</dd></div>
          </dl>
        </div>
      </section>

      <section className="diagnostic-cta" id="contato">
        <div className="diagnostic-grid" aria-hidden="true" />
        <div className="container-shell diagnostic-cta-inner" data-animate="fade-up">
          <p className="system-label">Diagnóstico institucional</p>
          <h2>Pare de comprar de volta a inteligência que os seus próprios dados já produzem.</h2>
          <p>
            Em uma reunião técnica, mostramos como conectar a operação do curso ao Raio-X ENAMED
            e transformar o histórico acadêmico em decisão contínua.
          </p>
          <div className="hero-actions">
            <a href={intelligenceMailto} className="btn btn-accent" data-magnetic>
              Solicitar diagnóstico do meu curso <ArrowRight />
            </a>
            <a href={`mailto:${company.email}`} className="btn btn-ghost" data-magnetic>
              Falar com a Cactus
            </a>
          </div>
          <div className="cta-contact">
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <span />
            <a href={`tel:${company.phoneIntl}`}>{company.phone}</a>
          </div>
        </div>
      </section>
    </div>
  );
}

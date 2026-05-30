import Link from "next/link";
import { Section } from "@/components/section";
import { CactusMark } from "@/components/cactus-mark";
import { company } from "@/components/company-data";

const capabilities = [
  "Aplicativos moveis",
  "Jogos digitais",
  "Plataformas web",
  "Automação e produtividade",
];

const areas = [
  {
    title: "Educação",
    text: "Produtos digitais que tornam conteúdos, jornadas e avaliações mais acessíveis.",
  },
  {
    title: "Saúde",
    text: "Soluções com foco em organização, cuidado com dados e experiência simples para usuários.",
  },
  {
    title: "Produtividade",
    text: "Ferramentas para melhorar processos, reduzir atritos e apoiar decisões operacionais.",
  },
  {
    title: "Experiências interativas",
    text: "Apps e jogos criados para engajar, ensinar e transformar ideias em produtos utilizáveis.",
  },
];

const instagramUrl = "https://www.instagram.com/cactuscompany_oficial/";

export default function Home() {
  return (
    <>
      <section
        className="hero-bg relative min-h-[calc(100svh-65px)] overflow-hidden border-b border-[#7fd8a8]/12"
        data-animate="hero"
      >
        <div className="hero-dots" />
        <svg
          className="hero-horizon"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path d="M0 210 Q 300 158 600 200 T 1200 178" stroke="rgba(127,216,168,0.20)" strokeWidth="1.5" />
          <path d="M0 250 Q 320 212 640 244 T 1200 232" stroke="rgba(127,216,168,0.12)" strokeWidth="1.5" />
          <path d="M0 292 Q 280 262 600 286 T 1200 280" stroke="rgba(127,216,168,0.07)" strokeWidth="1.5" />
        </svg>
        <div className="relative z-10 container-shell grid min-h-[calc(100svh-65px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <p
              className="text-sm font-[var(--font-mono)] uppercase tracking-[0.22em] text-[#7fd8a8] text-xs"
              data-animate="hero-item"
            >
              Tecnologia brasileira para produtos digitais
            </p>
            <h1
              className="mt-6 font-[var(--font-display)] text-5xl font-semibold leading-[1.04] text-balance sm:text-6xl lg:text-7xl"
              data-animate="hero-item"
            >
              Cactus Company
            </h1>
            <p
              className="mt-6 max-w-2xl text-lg leading-8 text-[#cdddd3] sm:text-xl"
              data-animate="hero-item"
            >
              Desenvolvemos aplicativos, jogos e soluções digitais para educação, saúde,
              produtividade e experiências interativas.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-animate="hero-item">
              <Link
                href="/solucoes"
                data-magnetic
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#7fd8a8] px-6 text-sm font-semibold text-[#0a1612] transition hover:bg-[#9be7bf]"
              >
                Conheça as soluções
              </Link>
              <Link
                href="/contato"
                data-magnetic
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/18 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contato empresarial
              </Link>
            </div>
          </div>

          <div className="cluster" data-animate="hero-media">
            <div className="ring r2" />
            <div className="ring r1" />
            <div className="glow" />
            <div className="bigtile">
              <span className="bigtile-sheen" />
              <CactusMark size={118} body="#c8efd9" showBase={false} />
            </div>
            <div className="gtile t1" title="Jogos">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <rect x="2" y="7" width="20" height="10.5" rx="5.25" />
                <path d="M7 10.2v3.6M5.2 12h3.6" />
                <circle cx="16.3" cy="11.3" r="1" fill="#7fd8a8" stroke="none" />
                <circle cx="18.4" cy="13.6" r="1" fill="#7fd8a8" stroke="none" />
              </svg>
            </div>
            <div className="gtile t2" title="Educação">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M3 9l9-3.6L21 9l-9 3.6z" />
                <path d="M6.5 10.7V15c0 1.4 2.7 2.6 5.5 2.6S17.5 16.4 17.5 15v-4.3" />
                <path d="M21 9v4.2" />
              </svg>
            </div>
            <div className="gtile t3" title="Saúde">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M12 20s-7-4.4-7-9.4A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.6C19 15.6 12 20 12 20z" />
              </svg>
            </div>
            <div className="gtile t4" title="Produtividade">
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M3 20h18" />
                <path d="M6 20v-6M11 20V6M16 20v-9" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="O que fazemos"
        title="Software com estrutura profissional e imaginação de produto."
        description={`${company.brand} é uma marca operada pela ${company.legalName}, criada para transformar problemas reais em experiências digitais consistentes, seguras e escaláveis.`}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <div key={item} className="quiet-border soft-panel rounded-lg p-5" data-animate="card">
              <span className="block h-1.5 w-10 rounded-full bg-[#7fd8a8]" data-dash />
              <p className="mt-5 font-[var(--font-display)] text-lg font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-y border-white/10 bg-[#132a23]/62 py-14 sm:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div data-animate="fade-up">
            <p className="text-sm font-[var(--font-mono)] uppercase tracking-[0.22em] text-[#7fd8a8] text-xs">
              Áreas de atuação
            </p>
            <h2 className="mt-4 font-[var(--font-display)] text-3xl font-semibold leading-tight text-balance sm:text-4xl">
              Produtos digitais preparados para ambientes exigentes.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {areas.map((area) => (
              <article
                key={area.title}
                className="quiet-border rounded-lg bg-[#0a1612]/58 p-6"
                data-animate="card"
              >
                <h3 className="font-[var(--font-display)] text-xl font-semibold">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#9fb8ab]">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-white/10 py-14 sm:py-20">
        <div className="container-shell">
          <div
            className="quiet-border soft-panel relative grid gap-8 rounded-lg p-6 sm:p-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center"
            data-animate="fade-up"
          >
            <div className="absolute right-6 top-6 hidden h-16 w-16 rounded-full bg-[#7fd8a8]/20 blur-2xl sm:block" />
            <div className="relative mx-auto grid size-32 place-items-center rounded-[28px] border border-[#7fd8a8]/30 bg-[#1f6e54] shadow-[0_0_42px_rgba(127,216,168,0.22)] lg:mx-0" data-animate="iglogo">
              <CactusMark size={74} body="#c8efd9" showBase={false} />
            </div>
            <div className="relative text-center lg:text-left">
              <p className="text-sm font-[var(--font-mono)] uppercase tracking-[0.22em] text-[#7fd8a8] text-xs">
                Instagram oficial
              </p>
              <h2 className="mt-4 font-[var(--font-display)] text-3xl font-semibold leading-tight text-balance sm:text-4xl">
                Acompanhe a Cactus Company
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#bcd1c6] sm:text-lg">
                Siga nossos bastidores de aplicativos, jogos e soluções digitais para acompanhar a
                evolução dos produtos da marca.
              </p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Seguir a Cactus Company no Instagram"
                data-magnetic
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#7fd8a8] px-6 text-sm font-semibold text-[#0a1612] transition hover:bg-[#9be7bf]"
              >
                Seguir no Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Privacidade e segurança"
        title="Confiança como requisito de produto."
        description="A Cactus Company adota uma postura responsável no tratamento de dados, com práticas orientadas por minimização, finalidade, disponibilidade e melhoria contínua da segurança."
      >
        <Link
          href="/politica-de-privacidade"
          data-magnetic
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#7fd8a8]/45 px-6 text-sm font-semibold text-[#9be7bf] transition hover:bg-[#7fd8a8]/10"
        >
          Ver política de privacidade
        </Link>
      </Section>
    </>
  );
}

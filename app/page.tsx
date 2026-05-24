import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";
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
        className="relative min-h-[calc(100svh-65px)] overflow-hidden border-b border-white/10"
        data-animate="hero"
      >
        <Image
          src="/images/cactus-hero.png"
          alt="Cacto digital com interfaces de software em ambiente verde escuro"
          fill
          priority
          className="object-cover object-center opacity-72 will-change-transform"
          sizes="100vw"
          data-animate="hero-media"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#06130d_0%,rgba(6,19,13,0.88)_30%,rgba(6,19,13,0.34)_72%,rgba(6,19,13,0.58)_100%)]" />
        <div className="relative z-10 container-shell flex min-h-[calc(100svh-65px)] items-center py-16">
          <div className="max-w-3xl">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6b56d]"
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
              className="mt-6 max-w-2xl text-lg leading-8 text-[#dce5d8] sm:text-xl"
              data-animate="hero-item"
            >
              Desenvolvemos aplicativos, jogos e soluções digitais para educação, saúde,
              produtividade e experiências interativas.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-animate="hero-item">
              <Link
                href="/solucoes"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d6b56d] px-6 text-sm font-semibold text-[#07130d] transition hover:bg-[#f0d58e]"
              >
                Conheça as soluções
              </Link>
              <Link
                href="/contato"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/18 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contato empresarial
              </Link>
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
              <span className="block h-1.5 w-10 rounded-full bg-[#d6b56d]" />
              <p className="mt-5 font-[var(--font-display)] text-lg font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-y border-white/10 bg-[#0b1f16]/62 py-14 sm:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div data-animate="fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d6b56d]">
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
                className="quiet-border rounded-lg bg-[#06130d]/58 p-6"
                data-animate="card"
              >
                <h3 className="font-[var(--font-display)] text-xl font-semibold">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#a7b4a3]">{area.text}</p>
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
            <div className="absolute right-6 top-6 hidden h-16 w-16 rounded-full bg-[#ff7a18]/20 blur-2xl sm:block" />
            <div className="relative mx-auto grid size-32 place-items-center overflow-hidden rounded-full border border-[#d6b56d]/35 bg-white shadow-[0_0_42px_rgba(214,181,109,0.18)] lg:mx-0">
              <Image
                src="/images/cactus-logo.png"
                alt="Logo da Cactus Company"
                width={160}
                height={160}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d6b56d]">
                Instagram oficial
              </p>
              <h2 className="mt-4 font-[var(--font-display)] text-3xl font-semibold leading-tight text-balance sm:text-4xl">
                Acompanhe a Cactus Company
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#c5d0c1] sm:text-lg">
                Siga nossos bastidores de aplicativos, jogos e soluções digitais para acompanhar a
                evolução dos produtos da marca.
              </p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Seguir a Cactus Company no Instagram"
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#d6b56d] px-6 text-sm font-semibold text-[#07130d] transition hover:bg-[#f0d58e]"
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
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d6b56d]/45 px-6 text-sm font-semibold text-[#f0d58e] transition hover:bg-[#d6b56d]/10"
        >
          Ver política de privacidade
        </Link>
      </Section>
    </>
  );
}

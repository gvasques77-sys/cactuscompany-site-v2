import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Aplicativos, jogos, plataformas web e soluções digitais desenvolvidas pela Cactus Company.",
};

const solutions = [
  {
    title: "Aplicativos",
    text: "Planejamento, desenvolvimento e evolução de apps para operações, conteúdo, educação, saúde e produtividade.",
  },
  {
    title: "Jogos e interatividade",
    text: "Experiências digitais com mecânicas de engajamento, aprendizagem, simulação e entretenimento.",
  },
  {
    title: "Solucoes web",
    text: "Sites, painéis, plataformas e interfaces responsivas preparadas para crescimento e manutenção.",
  },
  {
    title: "Consultoria de produto",
    text: "Apoio técnico para transformar ideias em escopo, arquitetura, roadmap e validação com usuários.",
  },
];

const sectors = ["Educação", "Saúde", "Produtividade", "Experiências interativas"];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solucoes"
        title="Aplicativos, jogos e produtos digitais para problemas reais."
        description="Atuamos do conceito à evolução contínua, combinando design de experiência, engenharia de software e estratégia de produto."
      />

      <Section title="Frentes de desenvolvimento">
        <div className="grid gap-5 md:grid-cols-2">
          {solutions.map((solution) => (
            <article key={solution.title} className="quiet-border soft-panel rounded-lg p-6">
              <h2 className="font-[var(--font-display)] text-2xl font-semibold">{solution.title}</h2>
              <p className="mt-4 leading-7 text-[#c5d0c1]">{solution.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="border-y border-white/10 bg-[#0b1f16]/62 py-14 sm:py-20">
        <div className="container-shell">
          <h2 className="font-[var(--font-display)] text-3xl font-semibold">Áreas de atuação</h2>
          <div className="mt-7 flex flex-wrap gap-3">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full border border-[#d6b56d]/28 bg-[#d6b56d]/8 px-4 py-2 text-sm font-semibold text-[#f0d58e]"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

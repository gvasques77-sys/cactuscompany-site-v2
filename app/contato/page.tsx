import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { company } from "@/components/company-data";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Contato empresarial da Cactus Company, marca operada pela GV TECNOLOGIA LTDA.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Contato empresarial para parceiros, plataformas e validações corporativas."
        description="Use os canais oficiais abaixo para falar com a Cactus Company sobre produtos digitais, parcerias, suporte e verificações institucionais."
      />

      <Section title="Canais oficiais">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="quiet-border soft-panel rounded-lg p-6 sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#d6b56d]">Email</p>
                <a className="mt-2 block text-xl font-semibold" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#d6b56d]">Telefone</p>
                <a className="mt-2 block text-xl font-semibold" href="tel:+5566996194231">
                  {company.phone}
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#d6b56d]">Dominio</p>
                <p className="mt-2 text-xl font-semibold">{company.domain}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#d6b56d]">Localização</p>
                <p className="mt-2 text-xl font-semibold">{company.location}</p>
              </div>
            </div>
          </div>

          <aside className="quiet-border rounded-lg bg-[#06130d]/70 p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-[#d6b56d]">Dados juridicos</p>
            <p className="mt-5 text-2xl font-semibold">{company.legalName}</p>
            <p className="mt-3 text-[#c5d0c1]">CNPJ {company.cnpj}</p>
            <p className="mt-5 leading-7 text-[#a7b4a3]">
              A empresa atende validações corporativas, comunicações de parceiros e solicitações
              relacionadas aos seus produtos digitais por meio dos canais oficiais informados.
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}

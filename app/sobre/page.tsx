import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { company } from "@/components/company-data";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a Cactus Company, marca operada pela GV TECNOLOGIA LTDA em Cuiabá, Mato Grosso.",
};

const principles = [
  "Clareza nas relações com clientes, parceiros e plataformas.",
  "Produtos digitais pensados para uso real, manutenção e evolução.",
  "Cuidado com privacidade, segurança e confiabilidade técnica.",
  "Criatividade aplicada a experiências educativas, produtivas e interativas.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre"
        title="Uma empresa de tecnologia brasileira com mentalidade de produto."
        description={`${company.brand} é a marca comercial operada pela ${company.legalName}, empresa registrada no Brasil e sediada em ${company.location}.`}
      />

      <Section
        title="Construímos soluções digitais resilientes."
        description="Assim como um cacto prospera em ambientes desafiadores, nossa abordagem combina foco, adaptabilidade e consistência técnica para criar softwares que continuam úteis depois do lançamento."
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="quiet-border soft-panel rounded-lg p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-[#d6b56d]">Identificacao</p>
            <dl className="mt-5 grid gap-4 text-sm">
              <div>
                <dt className="text-[#a7b4a3]">Razão social</dt>
                <dd className="mt-1 font-semibold text-white">{company.legalName}</dd>
              </div>
              <div>
                <dt className="text-[#a7b4a3]">CNPJ</dt>
                <dd className="mt-1 font-semibold text-white">{company.cnpj}</dd>
              </div>
              <div>
                <dt className="text-[#a7b4a3]">Dominio</dt>
                <dd className="mt-1 font-semibold text-white">{company.domain}</dd>
              </div>
              <div>
                <dt className="text-[#a7b4a3]">Localização</dt>
                <dd className="mt-1 font-semibold text-white">{company.location}</dd>
              </div>
            </dl>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle} className="quiet-border rounded-lg bg-[#0b1f16]/70 p-5">
                <p className="text-sm leading-6 text-[#dce5d8]">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

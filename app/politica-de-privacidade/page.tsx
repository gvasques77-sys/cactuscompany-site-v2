import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { company } from "@/components/company-data";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da Cactus Company, marca operada pela GV TECNOLOGIA LTDA.",
};

const topics = [
  {
    title: "Dados tratados",
    text: "Podemos tratar dados fornecidos diretamente por usuários, clientes ou parceiros, como nome, email, telefone, informações empresariais e mensagens enviadas pelos canais de contato.",
  },
  {
    title: "Finalidades",
    text: "Os dados são utilizados para atendimento, suporte, comunicação empresarial, melhoria de produtos, segurança operacional e cumprimento de obrigações legais ou regulatórias.",
  },
  {
    title: "Segurança",
    text: "Adotamos medidas técnicas e organizacionais proporcionais para proteger informações contra acessos não autorizados, perda, alteração ou uso indevido.",
  },
  {
    title: "Compartilhamento",
    text: "Informações podem ser compartilhadas com fornecedores essenciais, plataformas, autoridades ou parceiros quando necessário para operação, cumprimento legal ou validação corporativa.",
  },
  {
    title: "Direitos dos titulares",
    text: "Titulares podem solicitar informações, correção, atualização ou exclusão de dados pessoais, observadas as bases legais e obrigações aplicáveis.",
  },
  {
    title: "Contato sobre privacidade",
    text: `Solicitações relacionadas a privacidade podem ser enviadas para ${company.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidade"
        title="Política de Privacidade"
        description={`Esta política descreve como a ${company.brand}, marca operada pela ${company.legalName}, trata informações em seus canais, produtos e relações empresariais.`}
      />

      <Section title="Compromisso com privacidade e segurança">
        <div className="grid gap-5 md:grid-cols-2">
          {topics.map((topic) => (
            <article key={topic.title} className="quiet-border soft-panel rounded-lg p-6">
              <h2 className="font-[var(--font-display)] text-xl font-semibold">{topic.title}</h2>
              <p className="mt-4 text-sm leading-6 text-[#c5d0c1]">{topic.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="border-t border-white/10 py-12">
        <div className="container-shell text-sm leading-7 text-[#a7b4a3]">
          <p>
            Esta política pode ser atualizada para refletir mudanças nos produtos, processos ou
            exigências legais. A versão vigente será publicada neste endereço.
          </p>
          <p className="mt-4">
            Controladora: {company.legalName} · CNPJ {company.cnpj} · {company.location}
          </p>
        </div>
      </section>
    </>
  );
}

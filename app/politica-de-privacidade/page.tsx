import type { Metadata } from "next";
import { company } from "@/components/company-data";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da Cactus Company.",
};

export default function PrivacidadePage() {
  return (
    <section className="section section-bg" style={{ paddingTop: "clamp(88px,10vw,128px)" }}>
      <div className="container-shell" style={{ maxWidth: 820 }}>
        <div className="section-head" data-animate="fade-up">
          <span className="eyebrow">Privacidade</span>
          <h2>Política de Privacidade</h2>
        </div>
        <div className="prose" data-animate="fade-up">
          <p>
            A {company.brand}, marca operada pela {company.legalName}, trata dados pessoais com
            coleta mínima, finalidade definida e controles de acesso proporcionais, em conformidade
            com a Lei Geral de Proteção de Dados (LGPD).
          </p>

          <h3>Dados que tratamos</h3>
          <p>
            Tratamos apenas os dados necessários para atendimento, suporte, operação e segurança dos
            nossos produtos. No aplicativo Frequência Internato, a localização é lida somente no
            instante do check-in, nunca em segundo plano.
          </p>

          <h3>Biometria</h3>
          <p>
            A confirmação biométrica é feita localmente pelo próprio sistema operacional do
            aparelho. Nenhum dado biométrico é coletado, transmitido ou armazenado pela Cactus
            Company.
          </p>

          <h3>Finalidade e acesso</h3>
          <p>
            Aplicamos minimização de dados, finalidade específica e controles de acesso por perfil.
            Os dados de cada instituição ficam isolados dos dados de qualquer outra, e a
            infraestrutura é hospedada no Brasil.
          </p>

          <h3>Seus direitos</h3>
          <p>
            Solicitações sobre privacidade, incluindo acesso, correção e exclusão de dados, podem
            ser enviadas ao canal oficial de suporte.
          </p>

          <p style={{ marginTop: 28, color: "var(--muted-2)", fontSize: 14 }}>
            Controladora: {company.legalName} · CNPJ {company.cnpj} ·{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
}

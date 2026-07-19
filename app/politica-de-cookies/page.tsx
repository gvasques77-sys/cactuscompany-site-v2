import type { Metadata } from "next";
import { company } from "@/components/company-data";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de Cookies da Cactus Company.",
};

export default function CookiePolicyPage() {
  return (
    <section className="section section-bg" style={{ paddingTop: "clamp(88px,10vw,128px)" }}>
      <div className="container-shell" style={{ maxWidth: 820 }}>
        <div className="section-head" data-animate="fade-up">
          <span className="eyebrow">Privacidade</span>
          <h2>Política de Cookies</h2>
          <p>Última atualização: 18 de julho de 2026.</p>
        </div>

        <div className="prose" data-animate="fade-up">
          <p>
            Esta política explica como a {company.brand}, marca operada pela {company.legalName},
            utiliza cookies no site {company.domain}. Cookies são pequenos arquivos armazenados no
            navegador para viabilizar funções do site ou lembrar escolhas feitas pelo visitante.
          </p>

          <h3>Cookie utilizado atualmente</h3>
          <div className="cookie-policy-table" role="region" aria-label="Cookies utilizados">
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Finalidade</th>
                  <th>Categoria</th>
                  <th>Duração</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>cactus_cookie_consent_v1</td>
                  <td>Lembrar a preferência de cookies escolhida no banner.</td>
                  <td>Necessário</td>
                  <td>180 dias</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Medição opcional de desempenho</h3>
          <p>
            Quando o visitante autoriza a categoria “Desempenho e análise”, ativamos o Vercel Web
            Analytics para registrar visualizações de página de forma agregada. A ferramenta pode
            tratar informações como página acessada, horário, origem da visita, país, navegador,
            sistema operacional e tipo de dispositivo. Segundo a Vercel, esses registros não são
            associados a uma pessoa ou endereço IP e a identificação temporária da sessão é
            descartada após 24 horas.
          </p>
          <p>
            O Vercel Web Analytics não utiliza cookies de terceiros. Ainda assim, adotamos uma
            abordagem conservadora: o componente de medição só é carregado após a autorização no
            banner e deixa de ser carregado quando a preferência é revogada. Não utilizamos cookies
            de publicidade, marketing ou criação de perfis comportamentais.
          </p>

          <h3>Como alterar ou revogar sua escolha</h3>
          <p>
            Use o link “Preferências de cookies” disponível no rodapé do site. Também é possível
            apagar os cookies diretamente nas configurações do navegador; nesse caso, o banner será
            exibido novamente na próxima visita.
          </p>

          <h3>Seus direitos e contato</h3>
          <p>
            Dúvidas ou solicitações relacionadas à privacidade podem ser enviadas para{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>. Consulte também a nossa{" "}
            <a href="/politica-de-privacidade">Política de Privacidade</a>.
          </p>

          <p style={{ marginTop: 28, color: "var(--muted-2)", fontSize: 14 }}>
            Controladora: {company.legalName} · CNPJ {company.cnpj} · {company.location}
          </p>
        </div>
      </div>
    </section>
  );
}

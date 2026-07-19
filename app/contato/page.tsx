import type { Metadata } from "next";
import { company, demoMailto, waLink } from "@/components/company-data";
import { WhatsappGlyph } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contato",
  description: "Contato empresarial da Cactus Company — atendimento por e-mail e WhatsApp.",
};

export default function ContatoPage() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: "clamp(56px,7vw,88px)" }}>
        <div className="hero-blob one" />
        <div className="hero-dots" />
        <div className="container-wide" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-copy" style={{ flex: "unset", maxWidth: 720 }}>
          <span className="eyebrow eyebrow-light" data-animate="hero-item">Contato</span>
          <h1 data-animate="hero-item">Vamos conversar sobre o próximo produto da sua operação.</h1>
          <p data-animate="hero-item">
            Atendimento empresarial. Conte o seu contexto e a gente responde com a proposta e uma
            demonstração de 20 minutos.
          </p>
          <div className="hero-actions" data-animate="hero-item">
            <a href={demoMailto} className="btn btn-accent" data-magnetic>
              Escrever para a Cactus
            </a>
            <a href={waLink} target="_blank" rel="noopener" className="btn btn-ghost" data-magnetic>
              Chamar no WhatsApp
            </a>
          </div>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container-shell" style={{ maxWidth: 960 }}>
          <div className="contact-grid">
            <a href={`mailto:${company.email}`} className="contact-card" data-animate="card">
              <span className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
                  <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="k">E-mail</div>
              <div className="v">{company.email}</div>
            </a>

            <a href={waLink} target="_blank" rel="noopener" className="contact-card" data-animate="card">
              <span className="ic">
                <WhatsappGlyph size={22} />
              </span>
              <div className="k">Telefone · WhatsApp</div>
              <div className="v">{company.phone}</div>
            </a>

            <div className="contact-card" data-animate="card">
              <span className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21s-7-4.5-7-10a7 7 0 0114 0c0 5.5-7 10-7 10z" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </span>
              <div className="k">Endereço</div>
              <div className="v">Cuiabá, Mato Grosso · Brasil</div>
            </div>

            <div className="contact-card" data-animate="card">
              <span className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9S14.5 18.5 12 21c-2.5-2.5-3.5-6-3.5-9S9.5 5.5 12 3z" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </span>
              <div className="k">Domínio oficial</div>
              <div className="v">{company.domain}</div>
            </div>
          </div>
          <p style={{ maxWidth: 960, margin: "22px auto 0", fontFamily: "var(--font-sans)", fontSize: 13.5, color: "var(--muted-2)", textAlign: "center" }}>
            Empresa registrada: {company.legalName} · CNPJ {company.cnpj}. Respondemos em horário
            comercial.
          </p>
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  COOKIE_CONSENT_MAX_AGE,
  COOKIE_CONSENT_NAME,
  type CookieConsentChoice,
} from "@/components/cookie-consent-config";

type ConsentView = "summary" | "settings";

function readConsent(): CookieConsentChoice | null {
  if (typeof document === "undefined") return null;

  const match = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${COOKIE_CONSENT_NAME}=`));
  const value = match?.split("=")[1];

  return value === "all" || value === "necessary" ? value : null;
}

function saveConsent(choice: CookieConsentChoice) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_CONSENT_NAME}=${choice}; Max-Age=${COOKIE_CONSENT_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
  window.dispatchEvent(
    new CustomEvent(COOKIE_CONSENT_EVENT, {
      detail: { analytics: choice === "all" },
    })
  );
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState<ConsentView>("summary");
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const consent = readConsent();

    if (consent) {
      setAnalytics(consent === "all");
    } else {
      setVisible(true);
    }

    const openPreferences = () => {
      const current = readConsent();
      setAnalytics(current === "all");
      setView("settings");
      setVisible(true);
    };

    window.addEventListener("cactus:open-cookie-preferences", openPreferences);
    return () =>
      window.removeEventListener("cactus:open-cookie-preferences", openPreferences);
  }, []);

  const finish = (choice: CookieConsentChoice) => {
    saveConsent(choice);
    setAnalytics(choice === "all");
    setVisible(false);
    setView("summary");
  };

  if (!visible) return null;

  return (
    <aside
      className="cookie-consent"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="cookie-consent__mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <path
            d="M19.6 13.1A7.8 7.8 0 0 1 10.9 4.4 7.8 7.8 0 1 0 19.6 13.1Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="14" r="1" fill="currentColor" />
          <circle cx="13.5" cy="17" r="1" fill="currentColor" />
          <circle cx="7" cy="10" r="1" fill="currentColor" />
        </svg>
      </div>

      {view === "summary" ? (
        <div className="cookie-consent__content">
          <div className="cookie-consent__copy">
            <h2 id="cookie-consent-title">Sua privacidade, suas escolhas</h2>
            <p id="cookie-consent-description">
              Usamos um cookie necessário para lembrar sua escolha. A medição anônima de desempenho
              permanece desativada até você autorizar. Saiba mais na nossa{" "}
              <Link href="/politica-de-cookies">Política de Cookies</Link>.
            </p>
          </div>
          <div className="cookie-consent__actions">
            <button type="button" className="cookie-btn cookie-btn--ghost" onClick={() => setView("settings")}>
              Personalizar
            </button>
            <button type="button" className="cookie-btn cookie-btn--secondary" onClick={() => finish("necessary")}>
              Apenas necessários
            </button>
            <button type="button" className="cookie-btn cookie-btn--primary" onClick={() => finish("all")}>
              Aceitar todos
            </button>
          </div>
        </div>
      ) : (
        <div className="cookie-consent__content cookie-consent__content--settings">
          <div className="cookie-consent__settings-head">
            <div>
              <h2 id="cookie-consent-title">Preferências de cookies</h2>
              <p id="cookie-consent-description">
                Você pode alterar esta escolha quando quiser pelo rodapé do site.
              </p>
            </div>
            <button type="button" className="cookie-back" onClick={() => setView("summary")}>
              Voltar
            </button>
          </div>

          <div className="cookie-options">
            <div className="cookie-option">
              <div>
                <strong>Cookies necessários</strong>
                <span>Guardam sua preferência e mantêm funções essenciais do site.</span>
              </div>
              <span className="cookie-status">Sempre ativos</span>
            </div>

            <label className="cookie-option" htmlFor="cookie-analytics">
              <div>
                <strong>Desempenho e análise</strong>
                <span>
                  Visitas agregadas com Vercel Web Analytics, sem cookies de terceiros.
                </span>
              </div>
              <span className="cookie-switch">
                <input
                  id="cookie-analytics"
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                />
                <span aria-hidden="true" />
              </span>
            </label>
          </div>

          <div className="cookie-consent__settings-actions">
            <button type="button" className="cookie-btn cookie-btn--secondary" onClick={() => finish("necessary")}>
              Rejeitar opcionais
            </button>
            <button
              type="button"
              className="cookie-btn cookie-btn--primary"
              onClick={() => finish(analytics ? "all" : "necessary")}
            >
              Salvar preferências
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}

export function CookiePreferencesButton() {
  const openPreferences = () => {
    window.dispatchEvent(new Event("cactus:open-cookie-preferences"));
  };

  return (
    <button type="button" className="footer-cookie-button" onClick={openPreferences}>
      Preferências de cookies
    </button>
  );
}

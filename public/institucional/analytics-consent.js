(() => {
  "use strict";

  const CONSENT_COOKIE = "cactus_cookie_consent_v2";
  const CONSENT_MAX_AGE = 60 * 60 * 24 * 365;
  const GOOGLE_ANALYTICS_ID = "G-2JX31FFR8W";
  let analyticsEnabled = false;

  function readConsent() {
    const item = document.cookie
      .split("; ")
      .find((entry) => entry.startsWith(`${CONSENT_COOKIE}=`));
    const value = item ? item.split("=")[1] : null;
    return value === "all" || value === "necessary" ? value : null;
  }

  function saveConsent(choice) {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${CONSENT_COOKIE}=${choice}; Max-Age=${CONSENT_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
  }

  function prepareGoogleTag() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments);
    };

    window.gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
    window.gtag("set", "allow_google_signals", false);
    window.gtag("set", "allow_ad_personalization_signals", false);
  }

  function enableAnalytics() {
    if (analyticsEnabled || document.getElementById("cactus-google-analytics")) return;

    prepareGoogleTag();
    window.gtag("consent", "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "granted",
    });
    window.gtag("js", new Date());
    window.gtag("config", GOOGLE_ANALYTICS_ID, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    const script = document.createElement("script");
    script.id = "cactus-google-analytics";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
    document.head.appendChild(script);
    analyticsEnabled = true;
  }

  function removeAnalyticsCookies() {
    const hostname = window.location.hostname;
    const rootDomain = hostname.split(".").slice(-2).join(".");
    const names = document.cookie
      .split("; ")
      .map((entry) => entry.split("=")[0])
      .filter((name) => name === "_ga" || name.startsWith("_ga_"));

    names.forEach((name) => {
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${hostname}; SameSite=Lax`;
      if (rootDomain.includes(".")) {
        document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.${rootDomain}; SameSite=Lax`;
      }
    });
  }

  function disableAnalytics() {
    if (window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
      });
    }
    removeAnalyticsCookies();
  }

  function createConsentPanel() {
    const panel = document.createElement("aside");
    panel.className = "cactus-cookie-consent";
    panel.hidden = true;
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "false");
    panel.setAttribute("aria-labelledby", "cactus-cookie-title");
    panel.innerHTML = `
      <section class="cactus-cookie-consent__view" data-cookie-view="summary">
        <span class="cactus-cookie-consent__kicker">Privacidade</span>
        <h2 id="cactus-cookie-title">Seus dados. Sua escolha.</h2>
        <p>Usamos um cookie necessário para lembrar sua preferência. O Google Analytics 4 permanece desativado até você autorizar. Consulte a <a href="/politica-de-cookies">Política de Cookies</a>.</p>
        <div class="cactus-cookie-consent__actions">
          <button type="button" class="cactus-cookie-button cactus-cookie-button--quiet" data-cookie-action="settings">Personalizar</button>
          <button type="button" class="cactus-cookie-button" data-cookie-action="necessary">Apenas necessários</button>
          <button type="button" class="cactus-cookie-button cactus-cookie-button--primary" data-cookie-action="all">Aceitar todos</button>
        </div>
      </section>
      <section class="cactus-cookie-consent__view" data-cookie-view="settings" hidden>
        <span class="cactus-cookie-consent__kicker">Preferências</span>
        <h2 id="cactus-cookie-settings-title">Controle de cookies</h2>
        <div>
          <div class="cactus-cookie-option">
            <div><strong>Cookies necessários</strong><span>Guardam sua escolha e mantêm funções essenciais.</span></div>
            <span class="cactus-cookie-option__status">Sempre ativos</span>
          </div>
          <label class="cactus-cookie-option" for="cactus-cookie-analytics">
            <div><strong>Desempenho e análise</strong><span>Visitas e navegação com Google Analytics 4.</span></div>
            <span class="cactus-cookie-switch">
              <input id="cactus-cookie-analytics" type="checkbox">
              <span aria-hidden="true"></span>
            </span>
          </label>
        </div>
        <div class="cactus-cookie-consent__actions">
          <button type="button" class="cactus-cookie-button cactus-cookie-button--quiet" data-cookie-action="back">Voltar</button>
          <button type="button" class="cactus-cookie-button cactus-cookie-button--primary" data-cookie-action="save">Salvar preferências</button>
        </div>
      </section>
    `;
    document.body.appendChild(panel);
    return panel;
  }

  function addFooterPreferenceButton(openSettings, attempt = 0) {
    if (!document.querySelector(".cactus-cookie-preferences")) {
      const rows = document.querySelectorAll("footer > div");
      const target = rows.length ? rows[rows.length - 1] : null;

      if (target) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "cactus-cookie-preferences";
        button.textContent = "Preferências de cookies";
        button.addEventListener("click", openSettings);
        target.appendChild(button);
      }
    }

    if (attempt < 24) {
      window.setTimeout(() => addFooterPreferenceButton(openSettings, attempt + 1), 250);
    }
  }

  function init() {
    const panel = createConsentPanel();
    const summary = panel.querySelector('[data-cookie-view="summary"]');
    const settings = panel.querySelector('[data-cookie-view="settings"]');
    const analyticsToggle = panel.querySelector("#cactus-cookie-analytics");
    const existingConsent = readConsent();

    function show(view) {
      const showSettings = view === "settings";
      summary.hidden = showSettings;
      settings.hidden = !showSettings;
      panel.setAttribute(
        "aria-labelledby",
        showSettings ? "cactus-cookie-settings-title" : "cactus-cookie-title"
      );
      panel.hidden = false;
      if (showSettings) analyticsToggle.focus();
    }

    function hide() {
      panel.hidden = true;
    }

    function finish(choice) {
      const wasEnabled = analyticsEnabled;
      saveConsent(choice);
      if (choice === "all") {
        enableAnalytics();
        hide();
        return;
      }

      disableAnalytics();
      analyticsEnabled = false;
      hide();
      if (wasEnabled) window.location.reload();
    }

    function openSettings() {
      analyticsToggle.checked = readConsent() === "all";
      show("settings");
    }

    panel.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) return;
      const button = event.target.closest("[data-cookie-action]");
      if (!button) return;
      const action = button.getAttribute("data-cookie-action");
      if (action === "settings") openSettings();
      if (action === "back") show("summary");
      if (action === "necessary") finish("necessary");
      if (action === "all") finish("all");
      if (action === "save") finish(analyticsToggle.checked ? "all" : "necessary");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !panel.hidden && readConsent()) hide();
    });

    if (existingConsent === "all") enableAnalytics();
    if (!existingConsent) show("summary");
    addFooterPreferenceButton(openSettings);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

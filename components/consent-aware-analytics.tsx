"use client";

import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  COOKIE_CONSENT_NAME,
} from "@/components/cookie-consent-config";

const GOOGLE_ANALYTICS_ID = "G-2JX31FFR8W";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

function analyticsWasAccepted() {
  const match = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${COOKIE_CONSENT_NAME}=`));

  return match?.split("=")[1] === "all";
}

function prepareGoogleConsentMode() {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
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

function grantAnalyticsConsent() {
  prepareGoogleConsentMode();
  window.gtag?.("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "granted",
  });
}

function revokeAnalyticsConsent() {
  window.gtag?.("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });

  const cookieNames = document.cookie
    .split("; ")
    .map((item) => item.split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));
  const hostname = window.location.hostname;
  const rootDomain = hostname.split(".").slice(-2).join(".");

  cookieNames.forEach((name) => {
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${hostname}; SameSite=Lax`;

    if (rootDomain.includes(".")) {
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.${rootDomain}; SameSite=Lax`;
    }
  });
}

export function ConsentAwareAnalytics() {
  const [enabled, setEnabled] = useState(false);
  const enabledRef = useRef(false);

  useEffect(() => {
    const accepted = analyticsWasAccepted();

    if (accepted) {
      grantAnalyticsConsent();
      enabledRef.current = true;
      setEnabled(true);
    }

    const updateConsent = (event: Event) => {
      const detail = (event as CustomEvent<{ analytics?: boolean }>).detail;
      const analyticsEnabled = detail?.analytics === true;

      if (analyticsEnabled) {
        grantAnalyticsConsent();
        enabledRef.current = true;
        setEnabled(true);
        return;
      }

      const wasEnabled = enabledRef.current;
      revokeAnalyticsConsent();
      enabledRef.current = false;
      setEnabled(false);

      if (wasEnabled) {
        window.setTimeout(() => window.location.reload(), 0);
      }
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, updateConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, updateConsent);
  }, []);

  return enabled ? (
    <>
      <Analytics />
      <Script
        id="google-analytics"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ANALYTICS_ID}', {
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}
      </Script>
    </>
  ) : null;
}

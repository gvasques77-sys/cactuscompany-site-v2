"use client";

import { Analytics } from "@vercel/analytics/next";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_EVENT,
  COOKIE_CONSENT_NAME,
} from "@/components/cookie-consent-config";

function analyticsWasAccepted() {
  const match = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${COOKIE_CONSENT_NAME}=`));

  return match?.split("=")[1] === "all";
}

export function ConsentAwareAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(analyticsWasAccepted());

    const updateConsent = (event: Event) => {
      const detail = (event as CustomEvent<{ analytics?: boolean }>).detail;
      setEnabled(detail?.analytics === true);
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, updateConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, updateConsent);
  }, []);

  return enabled ? <Analytics /> : null;
}

import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SiteMotion } from "@/components/site-motion";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { CookieConsent } from "@/components/cookie-consent";
import { ConsentAwareAnalytics } from "@/components/consent-aware-analytics";
import { company } from "@/components/company-data";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cactuscompany.com.br"),
  title: {
    default: "Cactus Company | Inteligência institucional para o ENAMED",
    template: "%s | Cactus Company",
  },
  description:
    "Transforme avaliações, simulados, frequência e histórico acadêmico em diagnóstico, prioridades e planos de ação para elevar a qualidade do curso de Medicina.",
  applicationName: "Cactus Company",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Cactus Company | Inteligência institucional para o ENAMED",
    description:
      "Dados acadêmicos transformados em diagnóstico, prioridade e ação para cursos de Medicina.",
    url: "https://cactuscompany.com.br",
    siteName: "Cactus Company",
    locale: "pt_BR",
    type: "website",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.brand,
  legalName: company.legalName,
  url: "https://cactuscompany.com.br",
  logo: "https://cactuscompany.com.br/images/cactus-icon.png",
  email: company.email,
  telephone: company.phoneIntl,
  taxID: company.cnpj,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cuiabá",
    addressRegion: "MT",
    addressCountry: "BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <SiteMotion />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappFloat />
        <CookieConsent />
        <ConsentAwareAnalytics />
      </body>
    </html>
  );
}

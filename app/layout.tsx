import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SiteMotion } from "@/components/site-motion";

export const metadata: Metadata = {
  metadataBase: new URL("https://cactuscompany.com.br"),
  title: {
    default: "Cactus Company | Software, Apps e Jogos",
    template: "%s | Cactus Company",
  },
  description:
    "Cactus Company, marca operada pela GV TECNOLOGIA LTDA, desenvolve aplicativos, jogos e soluções digitais para educação, saúde, produtividade e experiências interativas.",
  applicationName: "Cactus Company",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cactus Company | Software, Apps e Jogos",
    description:
      "Empresa brasileira de tecnologia especializada em aplicativos, jogos e soluções digitais.",
    url: "https://cactuscompany.com.br",
    siteName: "Cactus Company",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/cactus-hero.png",
        width: 1536,
        height: 864,
        alt: "Visual institucional da Cactus Company",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <SiteMotion />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

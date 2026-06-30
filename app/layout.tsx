import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SiteMotion } from "@/components/site-motion";

export const metadata: Metadata = {
  metadataBase: new URL("https://cactuscompany.com.br"),
  title: {
    default: "Cactus Company | Software para empresas",
    template: "%s | Cactus Company",
  },
  description:
    "Cactus Company, marca operada pela GV TECNOLOGIA LTDA, desenvolve aplicativos, sistemas web e produtos digitais para empresas.",
  applicationName: "Cactus Company",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cactus Company | Software para empresas",
    description:
      "Empresa brasileira de tecnologia especializada em aplicativos, sistemas web e produtos digitais.",
    url: "https://cactuscompany.com.br",
    siteName: "Cactus Company",
    locale: "pt_BR",
    type: "website",
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

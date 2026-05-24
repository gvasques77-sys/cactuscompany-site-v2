import type { MetadataRoute } from "next";

const baseUrl = "https://cactuscompany.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/sobre", "/solucoes", "/contato", "/politica-de-privacidade"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/solucoes",
        destination: "/produtos",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/site-institucional/index.html",
        },
      ],
      afterFiles: [
        {
          source: "/proposta-nilton-lins",
          destination: "/proposta-nilton-lins/index.html",
        },
      ],
      fallback: [],
    };
  },
};

export default nextConfig;

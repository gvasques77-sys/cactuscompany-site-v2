import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  reactStrictMode: true,
  images: {
    qualities: [75, 92],
  },
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
      beforeFiles: [],
      afterFiles: [
        {
          source: "/proposta-nilton-lins",
          destination: "/proposta-nilton-lins/index.html",
        },
        {
          source: "/raio-x-enamed",
          destination: "/raio-x-enamed/index.html",
        },
      ],
      fallback: [],
    };
  },
};

export default nextConfig;

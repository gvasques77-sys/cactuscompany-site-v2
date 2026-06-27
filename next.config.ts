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
};

export default nextConfig;

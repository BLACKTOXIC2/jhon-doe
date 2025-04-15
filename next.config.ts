import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['fonts.gstatic.com'],
  },
  experimental: {
    turbo: {
      resolveAlias: {
        '@vercel/turbopack-next': '@vercel/next',
      },
    },
  },
};

export default nextConfig;

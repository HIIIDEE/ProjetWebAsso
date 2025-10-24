import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,

  // Optimisation des images
  images: {
    unoptimized: true, // Requis pour export statique
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Optimisation de la compilation
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Optimisation des bundles
  experimental: {
    optimizePackageImports: ['lucide-react', 'swiper'],
  },

  // Configuration ESLint
  eslint: {
    ignoreDuringBuilds: false, // Activé pour meilleure qualité
  },

  // Optimisation TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },

  // Headers de sécurité et performance
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Compression et minification
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;

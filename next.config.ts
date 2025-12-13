import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,

  // Optimisation des images
  images: {
    unoptimized: true, // Requis pour export statique
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 90, 95],
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

  // Compression et minification (sera géré par Apache/Nginx pour l'export statique)
  // compress: true, // Désactivé car géré par le serveur
  poweredByHeader: false,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.braumanandk.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 an
    deviceSizes: [320, 420, 640, 750],
    imageSizes: [16, 32, 48, 64, 96, 128],
  },
  compress: true,
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

export default nextConfig;

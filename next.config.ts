import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.braumanandk.com',
      },
    ],
  },
};

export default nextConfig;

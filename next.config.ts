import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/hizmetler/boya-restorasyonu',
        destination: '/hizmetler/pasta-cila',
        permanent: true,
      },
      {
        source: '/boya-restorasyonu',
        destination: '/hizmetler/pasta-cila',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/podcast/the-opera-star-who-carried-two-worlds",
        destination: "/podcast/episode-6",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "determined-parrot-937.convex.cloud",
        protocol: "https"
      },
      {
        hostname: "modest-stoat-127.convex.cloud",
        protocol: "https"
      }
    ]
  }
};

export default nextConfig;

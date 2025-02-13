import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  transpilePackages: ["three"],
  images: {
    unoptimized: true, // or configure domains/remotePatterns as needed
  },
};

export default nextConfig;

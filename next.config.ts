import type { NextConfig } from "next";

/**
 * Static export: the site must run offline on a phone/iPad (spotty Wi-Fi at the event)
 * and be hostable anywhere. NEXT_PUBLIC_BASE_PATH is set when served from a sub-path.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  experimental: { globalNotFound: true },
};

export default nextConfig;

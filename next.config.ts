import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev only: without this, `next dev` returns 403 for /_next/* chunks
  // requested from any origin other than localhost, so opening the dev
  // server from a phone on the LAN serves the HTML but never hydrates —
  // the page renders and nothing on it works. Covers the whole local
  // subnet because the machine's DHCP address moves around.
  allowedDevOrigins: ["192.168.1.101", "192.168.1.*", "192.168.0.*", "10.0.0.*"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;

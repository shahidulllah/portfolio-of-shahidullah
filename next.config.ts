import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        
      },
    ],
  },
  matcher: ["/dashboard/:path*"],
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "/s2/favicons",
      },
      {
        protocol: "https",
        hostname: "arjunpaints.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "morvinandan.co.in",
        pathname: "/_next/image",
      },
    ],
    // Local dev: avoid optimizer fetch issues; production still optimizes on Vercel
    unoptimized: process.env.NODE_ENV === "development",
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;

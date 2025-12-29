import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/iamxeshan-portfolio', // Required for GitHub Pages project sites
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;

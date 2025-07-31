import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        hostname:'linked-posts.routemisr.com',
        protocol:'https',
        pathname:'/uploads/**'
      }
    ]
  }
};

export default nextConfig;

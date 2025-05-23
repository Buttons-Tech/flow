// import React from 'react'

// const nextconfig: NextConfig = () => {
//   return (
//     <div>
//       <h1>nextconfig</h1>
//     </div>
//   )
// }

// export default NextConfig;
 

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
      }
    ]
  }
};

export default nextConfig;

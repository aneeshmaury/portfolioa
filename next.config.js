/** @type {import('next').NextConfig} */
const nextConfig = {};

// const isProd = (process.env.NODE_ENV = "production");

module.exports = nextConfig;
module.exports = {
  //production setup
  // basePath: isProd ? "/portfolio" : "",
  // output: "export",
  // distDir: "dist",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "/photo/**",
      },
    ],
  },
};

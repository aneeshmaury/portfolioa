// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = {
//   basePath: process.env.NODE_ENV === "production" ? "portfolio" : "",
//   output: process.env.NODE_ENV === "production" ? "export" : "",
//   distDir: process.env.NODE_ENV === "production" ? "dist" : "",

//   images: {
//     unoptimized: process.env.NODE_ENV === "production" ? "true" : "",
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "cdn.pixabay.com",
//         pathname: "/photo/**",
//       },
//     ],
//   },
// };
// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {};

const isProd = (process.env.NODE_ENV = "production");

module.exports = {
  basePath: isProd ? "/portfolio" : "",
  output: isProd ? "export" : "",
  distDir: "dist",
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

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
//  basePath: "/bharath_HITECH",
//   assetPrefix: "/bharath_HITECH/",
// }

// export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // ⚠️ basePath and assetPrefix are ONLY for GitHub Pages deployment
  // Comment them out for Render deployment
  // basePath: "/bharath_HITECH",
  // assetPrefix: "/bharath_HITECH/",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

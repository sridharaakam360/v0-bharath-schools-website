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

  basePath: "/bharath_HITECH",
  assetPrefix: "/bharath_HITECH/",

  trailingSlash: true, // ✅ VERY IMPORTANT FOR GITHUB PAGES

  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

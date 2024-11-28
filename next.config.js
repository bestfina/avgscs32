/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    lodash: {
      transform: "lodash/{{member}}",
    },
  },
  swcMinify: true, // Минификация с помощью SWC
};

module.exports = nextConfig;

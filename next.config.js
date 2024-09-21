/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scfaccra.com",
        port: "",
        pathname: "/templates/images/**",
      },
    ],
  },
};

module.exports = nextConfig;

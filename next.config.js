/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
  },
  env: {
    URL_API: "http://localhost:1337",
  },
};

module.exports = nextConfig;

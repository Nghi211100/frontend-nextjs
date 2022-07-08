/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://apidemostrapi.herokuapp.com"],
  },
  env: {
    URL_API: "https://apidemostrapi.herokuapp.com",
  },
};

module.exports = nextConfig;

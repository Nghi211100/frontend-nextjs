/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://apidemostrapi.herokuapp.com"],
  },
  i18n: {
    locales: ["en", "vn"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;

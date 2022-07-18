/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://apidemostrapi.herokuapp.com"],
  },
  env: {
    URL_API: "https://apidemostrapi.herokuapp.com",
    NEXT_PUBLIC_SUPABASE_URL: "https://jjbohcvlymprrqxayozs.supabase.co",
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqYm9oY3ZseW1wcnJxeGF5b3pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk5NDgsImV4cCI6MTk3MzcwNTk0OH0.MkfPDpuE4LgZIpzKLzNxvh7Icjo8ZUxU3_xkt49rmS0",
  },
  i18n: {
    locales: ["en", "vn"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  env: {
    SITE_URL: "https://phabrcetl.vercel.app",
  },
};

module.exports = nextConfig;

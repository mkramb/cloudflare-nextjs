/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API: process.env.API ?? "http://localhost:3001",
    PROXY_TARGET: process.env.PROXY_TARGET ?? 'http://localhost:3001',
  },
};

module.exports = nextConfig;

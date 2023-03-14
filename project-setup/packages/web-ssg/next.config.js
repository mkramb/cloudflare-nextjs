/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    API: process.env.API ?? 'https://breezy-rivers-feel-82-129-91-218.loca.lt',
    PROXY_TARGET: process.env.PROXY_TARGET ?? 'http://localhost:3001/',
  },
};

module.exports = nextConfig;

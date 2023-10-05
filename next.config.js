const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['frichieri.vercel.app'],
  },
};

module.exports = withContentlayer(nextConfig);

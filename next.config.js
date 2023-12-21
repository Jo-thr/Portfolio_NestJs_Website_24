/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'localhost:3000',
      'www.jonathan-thr.com',
      'images.unsplash.com',
    ],
  },
}

module.exports = nextConfig

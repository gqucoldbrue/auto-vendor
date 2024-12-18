/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeholder.com'], // Add any image domains you'll use
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add specific settings for Vercel deployment
  swcMinify: true,
  // Ensure we're handling images correctly
  images: {
    domains: [],
    unoptimized: true
  }
}

module.exports = nextConfig
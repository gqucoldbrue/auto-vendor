module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true // Required for static export
  },
  trailingSlash: true, // Recommended for static exports

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        punycode: false,
      };
    }
    return config;
  },
}
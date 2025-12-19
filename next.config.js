/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // IMPORTANT for static image delivery
  },
}

module.exports = nextConfig

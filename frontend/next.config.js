/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['localhost', 'cdn.sanity.io', 'flagcdn.com', 'source.unsplash.com'],
  },
}

module.exports = nextConfig

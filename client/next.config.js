/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['apierce-portfolio-payload.herokuapp.com'],
}
}

module.exports = nextConfig

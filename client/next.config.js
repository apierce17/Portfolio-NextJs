/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['apierce-portfolio-payload.herokuapp.com', 'i.ibb.co'],
}
}

module.exports = nextConfig

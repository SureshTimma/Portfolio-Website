const path = require('path')
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      },
    ],
  },
  // Disable static generation for Netlify deployment
  output: 'standalone',
  // Prevent static optimization
  reactStrictMode: true,
  experimental: {
    // Disable static generation and use SSR mode
    appDir: true,
  }
}

module.exports = nextConfig
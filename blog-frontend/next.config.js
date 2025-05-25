/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  compiler: {
    styledComponents: true
  },
  env: {
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'public/assets')
    };
    return config;
  },
  rewrites: async () => {
    return [
      {
        source: '/:path*',
        destination: `http://localhost:4000/:path*`
      }
    ];
  }
};

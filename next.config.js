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
  webpack: (config, {isServer}) => {
    if(!isServer){
      // Next.js에서 dynamic import 오류
      config.resolve.fallback={
        ...config.resolve.fallback,
        fs:false,
      }
    }
    
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'public/assets'),
      components: path.join(__dirname, 'src/components'),
      lib: path.join(__dirname, 'src/lib'),
      modules: path.join(__dirname, 'src/modules')
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

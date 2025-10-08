/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  },
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      // Next.js에서 dynamic import 오류
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // 절대 경로 alias 설정
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "public/assets"),
      components: path.join(__dirname, "src/components"),
      lib: path.join(__dirname, "src/lib"),
      modules: path.join(__dirname, "src/modules"),
    };

    // standalone 빌드에서 모듈 해결을 위한 추가 설정
    if (!dev && !isServer) {
      config.resolve.modules = [path.resolve(__dirname, "src"), "node_modules"];
    }

    return config;
  },
  rewrites: async () => {
    return [
      {
        source: "/:path*",
        destination: "/:path*",
      },
    ];
  },
};

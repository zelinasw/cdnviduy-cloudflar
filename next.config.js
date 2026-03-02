/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Ini penting agar Cloudflare tidak bingung dengan routing
  trailingSlash: true,
};

module.exports = nextConfig;

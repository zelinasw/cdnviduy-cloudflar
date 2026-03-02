/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Memastikan folder output rapi untuk Cloudflare
  distDir: '.next',
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Memaksa Next.js menghasilkan folder yang bisa dibaca Cloudflare
  distDir: '.next',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ini akan memaksa Next.js jadi HTML statis
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;

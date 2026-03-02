/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // INI JURUSNYA: Memaksa Cloudflare mengenali rute halaman
  trailingSlash: true,
  output: 'export', 
};

module.exports = nextConfig;

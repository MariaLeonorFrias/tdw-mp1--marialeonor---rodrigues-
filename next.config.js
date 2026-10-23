/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'custom',
    formats: ['image/avif', 'image/webp'],
  },
};

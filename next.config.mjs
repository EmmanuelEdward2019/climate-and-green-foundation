/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Corporate and government partnership pages are now a single Partnership page
      { source: '/get-involved/corporate', destination: '/get-involved/partnership', permanent: true },
      { source: '/get-involved/government', destination: '/get-involved/partnership', permanent: true },
    ]
  },
};

export default nextConfig;

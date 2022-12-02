/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['logodownload.org', 'source.unsplash.com', 'res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/:path',
        destination:
          'https://cfb1-2804-d41-ef30-c600-2d10-d67a-8eab-4f.sa.ngrok.io/:path',
      },
    ];
  },
  trailingSlash: true,
};

module.exports = nextConfig;

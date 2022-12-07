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
          'https://819f-2804-d41-ef30-c600-ccb4-889b-2a79-a0fd.sa.ngrok.io/:path',
      },
    ];
  },
  trailingSlash: true,
};

module.exports = nextConfig;

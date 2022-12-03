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
          'https://a316-2804-d41-ef30-c600-b8f0-4a95-b517-81e6.sa.ngrok.io/:path',
      },
    ];
  },
  trailingSlash: true,
};

module.exports = nextConfig;

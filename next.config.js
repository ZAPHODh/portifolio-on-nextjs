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
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination:
          'https://a876-2804-d41-ef30-c600-a1c7-b72c-7ecd-447.sa.ngrok.io',
      },
    ];
  },
};

module.exports = nextConfig;

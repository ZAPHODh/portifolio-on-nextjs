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
          'https://ec2-54-94-101-205.sa-east-1.compute.amazonaws.com:3000',
      },
    ];
  },
};

module.exports = nextConfig;

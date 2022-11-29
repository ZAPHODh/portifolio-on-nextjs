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
  env: {
    LOGIN_URL: process.env.NEXT_PLUBIC_API_LOGIN,
    REGISTER_URL: process.env.NEXT_PLUBIC_API_REGISTER,
  },
};

module.exports = nextConfig;

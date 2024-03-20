/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SITE_URL: process.env.SITE_URL,
    API_URL: process.env.API_URL,
    API_URL_IMAGE: process.env.API_URL_IMAGE,
  },
};

export default nextConfig;

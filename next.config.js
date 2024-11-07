/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.prod.website-files.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.discordapp.net',
          port: '',
          pathname: '/attachments/**', // Adjust the path as needed
        },
      ],
    },
  };
  
  module.exports = nextConfig;
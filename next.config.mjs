/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use basePath only when AZURE_DEPLOYMENT is set
  basePath: process.env.AZURE_DEPLOYMENT ? '/app/app1' : '',
};

export default nextConfig;

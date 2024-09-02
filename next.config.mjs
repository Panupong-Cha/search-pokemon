/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.pokemondb.net"],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;

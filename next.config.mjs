/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
};

export default nextConfig;

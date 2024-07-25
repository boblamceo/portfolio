/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
        HI: process.env.HI,
    },
};

export default nextConfig;

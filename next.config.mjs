/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack(config, options) {
        config.module.rules.push({
            test: /\.mp4$/,
            use: {
                loader: "file-loader",
                options: {
                    publicPath: "/_next/static/videos/", // Where the files will be served from
                    outputPath: "static/videos/", // Where the files will be output in the build folder
                    name: "[name].[hash].[ext]", // Naming convention of the output files
                },
            },
        });
        return config;
    },
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "https://api.limewire.com/api/image/generation",
                    },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET,DELETE,PATCH,POST,PUT",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
                    },
                ],
            },
        ];
    },
    env: {
        API_KEY: process.env.API_KEY,
    },
};

export default nextConfig;

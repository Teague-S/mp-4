import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    // Lets next/image load the movie posters OMDb links to.
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "m.media-amazon.com",
                pathname: "/images/**",
            },
        ],
    },
    turbopack: {
        rules: {
            "*.css": {
                loaders: ["@tailwindcss/turbopack"],
                as: "*.css",
            },
        },
    },
};

export default nextConfig;

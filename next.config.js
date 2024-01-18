/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: "fakestoreapi.com", pathname: "/img/**", protocol: "https"}
        ]
    }
}

module.exports = nextConfig

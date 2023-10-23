/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "blog.golemproject.net",
            "dappimg.com",
            "static-production.npmjs.com",
            "encrypted-tbn0.gstatic.com",
            "banner2.cleanpng.com",
            "cdn3.iconfinder.com",
            "avatars.githubusercontent.com",
        ],
        formats: ["image/webp"],
    },
}

module.exports = nextConfig

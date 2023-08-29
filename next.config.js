/** @type {import('next').NextConfig} */

require("dotenv").config();


const nextConfig = {
    reactStrictMode: true,
    env: {
        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
        GITHUB_REDIRECT_URI: process.env.GITHUB_REDIRECT_URI,
        GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET
    }
}

module.exports = nextConfig

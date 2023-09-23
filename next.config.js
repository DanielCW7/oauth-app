/** @type {import('next').NextConfig} */
require("dotenv").config();

const withImages = require("next-images");

module.exports = withImages({
  reactStrictMode: true,
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  },
  images: {
    domains: ['avatars.githubusercontent.com'], // allowed hostname 
  },
});

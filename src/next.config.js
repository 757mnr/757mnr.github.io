const path = require("path");
require("dotenv").config();

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    API_OG: process.env.API_OG,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    API_OG: process.env.API_OG,
  },
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/NaveenDA/naveenda.github.io/gh-pages/' : '',


  webpack: (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["public"] = path.join(__dirname, "public");

    return config;
  },
};

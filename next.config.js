const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "app")]
  }
};

module.exports = nextConfig;

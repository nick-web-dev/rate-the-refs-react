const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      imagesFolder: "public",
    },
  ],
  [
    {
      webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        });
        return config;
      },
    },
  ],
  [
    {
      distDir: "build",
    },
  ],
  // your other plugins here
]);

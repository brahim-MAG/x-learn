const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
    "@components": path.resolve(__dirname, "src/components"),
    "@redux": path.resolve(__dirname, "src/redux"),
    "@utils": path.resolve(__dirname, "src/utils"),
  })
);

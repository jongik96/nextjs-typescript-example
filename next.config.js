/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
// const withMarkdoc = require("@markdoc/next.js");
const removeImports = require("next-remove-imports")();
module.exports = removeImports(nextConfig);
// module.exports = withMarkdoc({ mode: "static" })({
//   pageExtensions: ["md", "mdoc", "js", "jsx", "ts", "tsx"],
// });

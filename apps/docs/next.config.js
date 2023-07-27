const { DOCS_URL } = process.env;

const withPWA = require("@imbios/next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  basePath: `${DOCS_URL}/docs`,
  reactStrictMode: true,
  transpilePackages: ["ui"],
});

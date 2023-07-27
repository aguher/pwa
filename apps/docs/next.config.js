const withPWA = require("@imbios/next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  basePath: "/docs",
  reactStrictMode: true,
  transpilePackages: ["ui"],
});

const withPWA = require("@imbios/next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  reactStrictMode: true,
  transpilePackages: ["ui"],
});

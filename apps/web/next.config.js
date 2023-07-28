const { DOCS_URL } = process.env;

const withPWA = require("@imbios/next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  reactStrictMode: true,
  transpilePackages: ["shadcn"],
  async rewrites() {
    return [
      /**
       * Rewrites for Multi Zones
       */
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/docs",
        destination: `${DOCS_URL}/docs`,
      },
      {
        source: "/docs/:path*",
        destination: `${DOCS_URL}/docs/:path*`,
      },
    ];
  },
});

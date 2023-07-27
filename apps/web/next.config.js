const { DOCS_URL } = process.env;

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  async rewrites() {
    return [
      /**
       * Rewrites for Multi Zones
       */
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
};

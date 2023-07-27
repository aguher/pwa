const { DOCS_URL } = process.env;

module.exports = {
  async rewrites() {
    return [
      /**
       * Rewrites for Multi Zones
       */
      {
        source: "/docs",
        destination: `http://localhost:3001/docs`,
      },
      {
        source: "/docs/:path*",
        destination: `http://localhost:3001/docs/:path*`,
      },
    ];
  },
};

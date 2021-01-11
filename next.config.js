module.exports = {
  async rewrites() {
    return [{ source: "/cms/(.*)", destination: "/cms/index.html" }];
  },
  serverRuntimeConfig: {
    rootDir: __dirname,
  },
};

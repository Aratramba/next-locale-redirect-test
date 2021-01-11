module.exports = {
  async rewrites() {
    return [{ source: "/cms/(.*)", destination: "/cms/index.html" }];
  },
  serverRuntimeConfig: {
    rootDir: __dirname,
  },
  i18n: {
    locales: ["en", "nl"],
    defaultLocale: "nl",
  },
};

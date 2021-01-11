module.exports = {
  async rewrites() {
    return [{ source: "/cms/(.*)", destination: "/" }];
  },
  serverRuntimeConfig: {
    rootDir: __dirname,
  },
  i18n: {
    locales: ["en", "nl"],
    defaultLocale: "nl",
  },
};

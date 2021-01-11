module.exports = {
  async rewrites() {
    return [{ source: "/cms/(.*)", destination: "/cms", locale: false }];
  },
  serverRuntimeConfig: {
    rootDir: __dirname,
  },
  i18n: {
    locales: ["en", "nl"],
    defaultLocale: "nl",
  },
  basePath: "",
};

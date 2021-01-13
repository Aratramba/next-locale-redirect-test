module.exports = {
  async rewrites() {
    return [{ source: "/cms/:path*", destination: "/cms/index.html", locale: false }];
  },
  serverRuntimeConfig: {
    rootDir: __dirname,
  },
  i18n: {
    locales: ["en", "nl"],
    defaultLocale: "nl",
  },
};

module.exports = {
  async rewrites() {
    return [
      //{ source: "/cms/:path*", destination: "/cms/index.html", locale: false } // does not work
      //{ source: "/cms/(.*)", destination: "/cms/index.html", locale: false } // does not work
      { source: "/cms/(.*)", destination: "/cms/index.html" } // ?
      //{ source: "/cms/:path*", destination: "/cms/index.html" } // ?
    ];
  },
  serverRuntimeConfig: {
    rootDir: __dirname,
  },
  i18n: {
    locales: ["en", "nl"],
    defaultLocale: "nl",
  },
};

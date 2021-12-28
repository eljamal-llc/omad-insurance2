// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en","uz","ru"],
    localeDetection: false,
  },
  domains: [
    {
      domain: 'localhost:3000.com',
      defaultLocale: 'en',
    },
    {
      domain: 'localhost:3000.ru',
      defaultLocale: 'ru',
    },
    {
      domain: 'localhost:3000.uz',
      defaultLocale: 'uz',
      // an optional http field can also be used to test
      // locale domains locally with http instead of https
      http: true,
    },
  ],

}
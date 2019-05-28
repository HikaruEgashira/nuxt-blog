const I18N = {
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_cookie_lang',
    alwaysRedirect: false
  },
  useCookie: true,
  alwaysRedirect: false,
  locales: [
    {
      code: 'ja',
      iso: 'ja_JP',
      name: 'Japan',
      file: 'ja/index.js'
    },
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en/index.js'
    }
  ],
  lazy: true,
  seo: false,
  langDir: '/locales/',
  defaultLocale: 'ja',
  parsePages: false
}

module.exports = {
  I18N
}

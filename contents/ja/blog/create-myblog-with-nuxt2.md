---
name: 'create-myblog-with-nuxt2'
trans: '404'
title: Nuxtでブログを作成２ - nuxt-i18nで日本語対応
year: 28 May 2019
color: '#edece7'
isTextColorDark: true
noMainImage: true
extraComponent: 'Datatable'
id: 'design-and-code-skeletons-screens'
description: |
  このブログ作成までの日記。nuxt-i18nで日本語対応。
---

## nuxt-i18nでの日本語化

ここでは英語、スペイン語に対応しているNuxtプロジェクトnuxt-markdown-blog-starterを日本語対応するまで行ないました。

[https://github.com/marinaaisa/nuxt-markdown-blog-starter](https://github.com/marinaaisa/nuxt-markdown-blog-starter)

nuxt.config.jsで

```javascript
modules: [  
  '@nuxtjs/style-resources',
  ['nuxt-i18n', I18N],
  'nuxt-webfontloader'
],
```

というふうに読み込み、このI18Nは`const { I18N } = require('./locales/i18n-nuxt-config')`で読み込まれている。

`i18n-nuxt-config.js`は、

```javascript
const I18N = {
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_cookie_lang',
    alwaysRedirect: true
  },
  useCookie: true,
  alwaysRedirect: true,
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en/index.js'
    },
    {
      code: 'es',
      iso: 'es-ES',
      name: 'Español',
      file: 'es/index.js'
    }
  ],
  lazy: true,
  seo: false,
  langDir: '/locales/',
  defaultLocale: 'en',
  parsePages: false
}

module.exports = {
  I18N
}
```

localesを追加し、ついでにデフォルトを日本語にしました。

```javascript
const I18N = {
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_cookie_lang',
    alwaysRedirect: true
  },
  useCookie: true,
  alwaysRedirect: true,
  locales: [
+   {
+     code: 'ja',
+     iso: 'ja_JP',
+     name: 'Japan',
+     file: 'ja/index.js'
+   },
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
+ defaultLocale: 'ja',
  parsePages: false
}

module.exports = {
  I18N
}

```

とりあえず/locale/jaフォルダを作成しました。中に`戻る`や`タイトル`のように記事以外で翻訳すべきところの設定をおこなっています。

```txt
.
├── en
├── ja
    ├── footer.js
    ├── index.page-head.js
    ├── index.js
└── i18n-nuxt-config.js
```

### 記事を静的に生成

ルーティングはnuxt.config.jsで設定する。
手動でルーティングを行うことで

```javascript
+ import blogsJa from './contents/ja/blogsJa.js'
  generate: {
    routes: [
+     '/en', '404'
    ]
+   .concat(blogsJa.map(w => `/blog/${w}`))
+   .concat(blogsEn.map(w => `en/blog/${w}`))
  }
```

./contents/ja/blog.jsに記事リストを記述してある。

blogJa.js

```javascript
export default [
  'blog-using-vue-nuxt-markdown',
  'vuex-what-is-when-use-it',
  'design-and-code-skeletons-screens'
]
```

## 言語の変更がうまくいかない

自分のブラウザで英語で表示して日本語で見ようとしたとき、うまく切り替えられない。

alwaysredirectを無効化することで切り替えることができるようになった。

```javascript
const I18N = {
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_cookie_lang',
    alwaysRedirect: true
  },
  useCookie: true,
  alwaysRedirect: true,
  ・・・
  ・・・
```

## 日本語追加できた

![ja](https://i.imgur.com/kufv2wO.png)

## 参考にしたページ

[国際化（i18n） - Nuxt.js](https://ja.nuxtjs.org/examples/i18n/)

[NuxtJSの国際化にはnuxt-i18nを使おう - Qiita](https://qiita.com/wildmouse/items/d08a6bf464ac3696c7b2)
---
name: 'create-myblog-with-nuxt1'
trans: 'design-and-code-skeletons-screens'
title: Nuxtでブログを作成１ - NuxtのマークダウンブログサイトOSSの紹介
year: 28 May 2019
color: '#edece7'
isTextColorDark: true
noMainImage: true
extraComponent: 'Datatable'
id: 'design-and-code-skeletons-screens'
description: |
  このブログ作成までの日記。Nuxt製マークダウン対応ブログサイト作成OSS・nuxt-markdown-blog-starterについての解説文書の日本語訳。
---

## マークダウンでのブログサイトOSS - nuxt-markdown-blog-starterとは？

[README.md](https://github.com/marinaaisa/nuxt-markdown-blog-starter/blob/master/README.md)を逆引き風意訳します。

このプロジェクトはマークダウンをHTML変換してブログ風にリスト作成までしています。
i18nで英語とスペイン語に対応しています。

### プロジェクトファイルの構成

```txt
.
├── node_modules
├── assets
├── components
├── contents
  ├── en
    ├── blog
    ├── blogsEn.js
  ├── es
    ├── blog
    ├── blogsEs.js
├── layouts
├── locales
├── pages
├── plugins
├── static
├── .gitignore
├── LICENSE
├── nuxt.config.js
├── package-lock.json
├── package.json
└── README.md
```

#### ブログ投稿の主に利用するファイル

- cssやブログで使う画像: assets
- ブログ一覧: components/blog/Datatable.vue、BlogCard.vue
- 記事の構成: components/Sections/BlogSection.vue
- 記事（マークダウン）: contents/en/blog OR ja/blog (blog/blogsJa.jsでルーティングが適用される)

### デモサイトでの紹介文訳

#### どのようなプロジェクトなのか

[デモサイト](https://nuxt-markdown-blog-starter.netlify.com)でこのプロジェクトについて紹介されています。
作成者はUXエンジニアのMarina Aísa。2018年末に作成

マークダウンのファイル名がURLになり、存在しない場合は404ページが出力されるようになっているようだ。
マークダウンのパースは`frontmatter-markdown-loader`。色つけを`HightlightJS`で行っている。

今後追加したいものは、

- ダイナミックページでのポートフォリオ作成
- UXの向上
- デザイン、ブログ作成を全てWeb上で行えるように
- CSSを減らす
- 拍手ボタン（Medium風）
- コメント機能
- 似た投稿のサジェスト機能

だそうなので貢献したい人は公式GitHubページにプルリク送ってみてもいいですね。

#### スケルトン画面

[https://nuxt-markdown-blog-starter.netlify.com/blog/design-and-code-skeletons-screens/](https://nuxt-markdown-blog-starter.netlify.com/blog/design-and-code-skeletons-screens/)

```md
<tbody v-if="isLoading">
  <tr
    v-for="index in 3"
    :key="index"
    class="datagrid__row"
  >
    <td
      v-for="column in columns"
      :key="column.title"
    >
      <span>
        <div
          class="datagrid__loader"
          :style="`width: ${Math.floor(Math.random() * 51) + 50}%;`"
        />
      </span>
    </td>
  </tr>
</tbody>
```

のような記述でスケルトン画面を追加できます。

i18nでの日本語化を次回行っていこうと思います。
---
title: Preload Fonts in Nuxt.js
tags: ["nuxtjs", "typography"]
---

> [Preload is an early fetch instruction to the browser to request a resource needed for a page (key scripts, Web Fonts, hero images).](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)

Preloading fonts is crucial to prevent layout shifts and your visitors from undesired effects, such as _Flash of Invisible Text_ (aka FOIT).

By default, requests to font resources are delayed after other critical resources (this behaviour, therefore, delays font rendering to the screen).

> [Font requests are dispatched after the render tree indicates which font variants are needed to render the specified text on the page.](https://web.dev/optimize-webfont-loading/)

It's worth noting that [default browser behaviour is _not_ consistent](https://web.dev/avoid-invisible-text/#option-1:-use-font-display) in terms of rendering texts when is not yet available ([`font-display`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) to the rescue!).

## Step #1 - Self-host fonts

Make use of the [`static`](https://nuxtjs.org/docs/directory-structure/static/) directory to reference fonts relative to the root (will come in handy in the subsequent steps).

```
| static/
|-- montserrat
|   |-- 400-regular.woff2
|   |-- 500-medium.woff2
|   |-- 700-bold.woff2
```

## Step #2 - Define custom fonts with `@font-face`

```css[main.css]
@font-face {
  font-family: Montserrat;
  font-weight: 400;
  font-display: optional;
  src: url("/fonts/montserrat/400-regular.woff2") format("woff");
}
```

## Step #3 - Prioritise font requests

```js[nuxt.config.js]
export default {
  head: {
    link: [
      {
        rel: "preload",
        as: "font",
        crossorigin: "crossorigin",
        type: "font/woff2",
        href: "/fonts/montserrat/400-regular.woff2",
      },
      // ...
    ],
  },

  css: ["@/assets/css/main.css"],
}
```

## Resources

- [Preload, Prefetch And Priorities in Chrome](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)
- [Optimize WebFont loading and rendering](https://web.dev/optimize-webfont-loading/)
- [Avoid invisible text during font loading](https://web.dev/avoid-invisible-text/)
- [Prevent layout shifting and flashes of invisible text (FOIT) by preloading optional fonts](https://web.dev/preload-optional-fonts/)

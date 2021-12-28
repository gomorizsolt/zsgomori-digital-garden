---
title: Automatic Components Discovery
tags: ["nuxt"]
---

Nuxt can auto-import components from the `~/components` directory. This opt-in feature can be enabled via `nuxt.config.js`:

```js[nuxt.config.js]
export default {
  components: true
}
```

As a result, components residing in the `~/components` directory can be used throughout your project, without having to explicitly import them:

```
| components/
--| MyButton.vue
```

```html
<template>
  <MyButton>Back</MyButton>
</template>
```

## Lazy-loading

By prefixing the component's name with `Lazy` in the template, it will be lazy-loaded (i.e. a separate chunk will be created and loaded on-demand):

```html
<template>
  <LazyMyButton>Back</LazyMyButton>
</template>
```

## Resources

- [Components directory](https://nuxtjs.org/docs/directory-structure/components/#dynamic-imports)

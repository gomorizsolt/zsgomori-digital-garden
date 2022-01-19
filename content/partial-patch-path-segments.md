---
title: Partial Patch Path Segments
tags: ["vue"]
---

Let's suppose the following route definition in a Vue SPA:

```js
const routes = [
  {
    name: 'bar',
    path: '/foo/:fooId/bar/:barId',
    component: Bar,
  }
];
```

`:fooId` and `:barId` are called dynamic path segments - their values are mapped to the respective segment of the URL.

```js
this.$router.push({
  name: 'bar',
  params: {
    fooId: 1,
    barId: 2
  }
});

// => /foo/1/bar2
```

If one wanted to update _solely_ one of the params (e.g. `barId`), [Vue Router](router.vuejs.org/) makes it a breeze:

```js
this.$router.push({
  params: {
    // preserve params
    ...this.$route.params,
    barId: 3
  }
});
```

We spread `...this.$route.params` to preserve the current params (`fooId`) and override `barId` (i.e. we partially patch the route params).

## Resources
- [StackOverflow: How to replace one parameter in Vuejs router](https://stackoverflow.com/questions/56383717/how-to-replace-one-parameter-in-vuejs-router)

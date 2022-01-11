---
title: Ref vs Reactive
tags: ["vue"]
---

## Ref better reflects if object is reactive

Using ref on objects makes it clear whether the object is reactive or just a plain object.

```js
if (foo.value.bar) {
  // safe to assume it's a ref object
}

if (foo.bar) {
  // no clue if it's a reactive or plain object
}
```

## Ref can be direct watcher data source

```js
const foo = ref(0);

// ref is used directly
watch(foo, (current, prev) => {
  // ...
});

const bar = reactive({ count: 0 });

// getter function
watch(() => bar.count, (current, prev) => {
  // ...
});
```

## Resources
- [Computed and watch](https://v3.vuejs.org/api/computed-watch-api.html#computed)

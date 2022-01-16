---
title: "Best Practices for Writing Composables"
tags: ["vue"]
---

## Return an object of `refs` to preserve reactivity when desctructuring

```js[useCounter.js]
const useFoo = () => {
  const bar = ref(true);
  const buzz = ref(true);
  
  return {
    bar,
    buzz
  }
};
```

```html[Component.vue]
<script>
export default {
  setup() {
    const { bar, buzz } = useFoo();
  
    // ...
  } 
}
</script>
```

Consumers can still convert it to a reactive object by wrapping it in `reactive`:

```html[Component.vue]
<script>
export default {
  setup() {
    const foo = reactive(useFoo());
  
    // ...
  } 
}
</script>
```

Even better, the composable may present different interfeces to provide more granular control (borrowed from [VueUse](https://vueuse.org)):

```html[Component.vue]
<script>
export default {
  setup() {
    const foo = useFoo();
  
    const { bar, buzz } = useFoo({ controls: true });
  } 
}
</script>
```

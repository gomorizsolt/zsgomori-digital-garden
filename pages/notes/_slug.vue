<template>
  <div>
    <NuxtLink to="/">back</NuxtLink>

    <NuxtContent class="prose prose-sm sm:prose mx-auto" :document="note" />
  </div>
</template>

<script>
export default {
  layout: "note",
  async asyncData({ $content, route }) {
    const note = await $content(`${route.params.slug}`).fetch();

    return {
      note,
    };
  },
};
</script>

<template>
  <NuxtContent class="prose prose-sm sm:prose mx-auto" :document="note" />
</template>

<script>
export default {
  async asyncData({ $content, route }) {
    const note = await $content(`${route.params.slug}`).fetch()

    return {
      note,
    }
  },
}
</script>

<template>
  <ul>
    <li v-for="note in notes" :key="note.slug + note.createdAt">
      <NuxtLink :to="`/notes/${note.slug}`">{{ note.title }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const notes = await $content().fetch()

    return {
      notes,
    }
  },
}
</script>

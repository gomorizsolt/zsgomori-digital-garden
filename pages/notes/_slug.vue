<template>
  <div>
    <h1>{{ note.title }}</h1>

    <NoteTagsList :tags="note.tags" />

    <NuxtContent :document="note" />
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

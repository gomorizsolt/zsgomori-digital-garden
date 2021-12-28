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
  head() {
    return {
      title: this.note.title,
      link: [
        {
          rel: "preload",
          as: "font",
          crossorigin: "crossorigin",
          type: "font/woff2",
          href: "/fonts/montserrat/500-medium.woff2",
        },
      ],
    };
  },
};
</script>

<template>
  <NuxtLink :to="to" class="block group">
    <div
      class="bg-white rounded-md shadow-md p-4 transition-shadow duration-150 ease-in group hover:shadow-lg"
    >
      <div class="flex justify-between items-center text-xs">
        <time class="text-slate-700" :datetime="createdAt.raw">
          {{ createdAt.formatted }}
        </time>

        <NoteTagsList :tags="note.tags" />
      </div>

      <h1
        class="text-xl sm:text-2xl font-bold mt-3 text-slate-900 group-hover:underline decoration-sky-500 decoration-2 underline-offset-4"
      >
        {{ note.title }}
      </h1>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "NoteCard",
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  computed: {
    createdAt() {
      return this.note.createdAt;
    },
    to() {
      return `/notes/${this.note.slug}`;
    },
  },
};
</script>

<template>
  <div class="space-x-1">
    <span
      v-for="tag in tags"
      :key="tag"
      class="bg-slate-900 p-2 rounded text-slate-200"
      >#{{ tag }}</span
    >
  </div>
</template>

<script>
export default {
  name: "NoteTagsList",
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
};
</script>

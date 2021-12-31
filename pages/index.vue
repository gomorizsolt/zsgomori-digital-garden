<template>
  <div>
    <TRichSelect
      v-model="selectedTags"
      class="mb-6"
      :options="options"
      :close-on-select="false"
      placeholder="Filter by tags"
      multiple
    />

    <div class="space-y-5">
      <NoteCard
        v-for="note in filteredNotes"
        :key="`${note.slug}${note.createdAt}`"
        :note="note"
      />
    </div>
  </div>
</template>

<script>
export default {
  // `asyncData` is mocked on client-side navigation: https://nuxtjs.org/announcements/going-full-static/#smarter-nuxt-generate
  async asyncData({ $content }) {
    const notes = await $content().fetch();

    // the returned value is merged into the component's local state
    return {
      notes,
    };
  },
  data: () => ({
    selectedTags: [],
    searchString: "",
  }),
  computed: {
    allTags() {
      return new Set(this.notes.map((note) => note.tags).flat());
    },
    options() {
      return Array.from(this.allTags).map((tag) => ({
        value: tag,
        text: `#${tag}`,
      }));
    },
    notesMatchingSearchString() {
      if (!this.searchString) {
        return this.notes;
      }

      return this.notes.filter((note) =>
        note.title.toLowerCase().includes(this.searchString.toLowerCase())
      );
    },
    filteredNotes() {
      if (!this.selectedTags.length) {
        return this.notesMatchingSearchString;
      }

      return this.notesMatchingSearchString.filter((note) =>
        note.tags.some((tag) => this.selectedTags.includes(tag))
      );
    },
  },
  methods: {
    // TODO debounce
    // handleSearchStringChange(event) {
    //   const trimmedSearchStirng = event.target.value.trim?.();
    //   if (!trimmedSearchStirng) {
    //     this.searchString = "";
    //   } else {
    //     this.searchString = trimmedSearchStirng;
    //   }
    // },
  },
};
</script>

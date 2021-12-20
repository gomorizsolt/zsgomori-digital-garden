<template>
  <div>
    <div class="flex flex-wrap justify-around">
      <ClientOnly>
        <div
          v-for="tag in allTags"
          :key="tag"
          :class="{ 'bg-blue-500': selectedTagsLookup[tag] }"
          @click="onSelect(tag)"
        >
          #{{ tag }}
        </div>
      </ClientOnly>

      <button @click="clearSelectedTags">Clear</button>
    </div>

    <input
      :value="searchString"
      type="text"
      placeholder="Search"
      @input="handleSearchStringChange"
    />

    <div class="grid grid-cols-notes gap-x-4 gap-y-8">
      <NuxtLink
        v-for="note in filteredNotes"
        :key="note.slug + note.createdAt"
        :to="`/notes/${note.slug}`"
      >
        {{ note.title }}

        {{ note.createdAt.formatted }}
      </NuxtLink>
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
    selectedTagsLookup() {
      return Object.fromEntries(this.selectedTags.map((tag) => [tag, true]));
    },
    notesMatchingSearchString() {
      if (!this.searchString) {
        return this.notes;
      }

      return this.notes.filter((note) =>
        note.title.includes(this.searchString.toLowerCase())
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
    onSelect(selectedTag) {
      if (this.selectedTags.includes(selectedTag)) {
        this.selectedTags = this.selectedTags.filter(
          (tag) => tag !== selectedTag
        );
      } else {
        this.selectedTags.push(selectedTag);
      }
    },
    clearSelectedTags() {
      this.selectedTags = [];
    },
    // TODO debounce
    handleSearchStringChange(event) {
      const trimemdSearchString = event.target.value.trim?.();

      if (!trimemdSearchString) {
        this.searchString = "";
      } else {
        this.searchString = trimemdSearchString;
      }
    },
  },
};
</script>

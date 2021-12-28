<template>
  <div class="flex flex-col min-h-screen">
    <main class="flex-1 mx-auto max-w-2xl w-full px-4 py-8">
      <Nuxt />
    </main>

    <footer class="text-center py-6 text-sm">
      Made with ♥ by Zsolt Gomori
    </footer>
  </div>
</template>

<script>
export default {
  // https://stackoverflow.com/a/65549374/9599137
  name: "DefaultLayout",
};
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header>header</header>

    <main class="flex-1 mx-auto max-w-5xl w-full px-4">
      <Nuxt />
    </main>

    <footer>footer</footer>
  </div>
</template>

<script>
export default {
  // https://stackoverflow.com/a/65549374/9599137
  name: "DefaultLayout",
};
</script>

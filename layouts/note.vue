<template>
  <div class="prose prose-sm md:prose mx-auto py-10 px-6">
    <NuxtLink to="/" class="mb-6 block">
      <LazyButton aria-label="Back">
        <template #prefixIcon>
          <LazyArrowCircleLeft aria-hidden="true" />
        </template>
      </LazyButton>
    </NuxtLink>

    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<template>
  <div class="prose prose-sm md:prose mx-auto py-10 px-6">
    <NuxtLink to="/" class="mb-6 block">
      <Button aria-label="Back">
        <template #prefixIcon>
          <ArrowCircleLeft aria-hidden="true" />
        </template>
      </Button>
    </NuxtLink>

    <Nuxt />
  </div>
</template>

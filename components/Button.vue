<template>
  <button
    class="flex items-center p-2 font-medium text-white transition-colors duration-200 bg-slate-900 rounded-md hover:bg-slate-800 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-opacity-80"
  >
    <slot name="prefixIcon"></slot>

    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>

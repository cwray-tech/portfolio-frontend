<template>
  <NuxtLink
    :to="link"
    no-prefetch
    class="text-base leading-6 font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
  >
    {{ text }}
  </NuxtLink>
</template>
<script>
export default {
  props: ["text", "link"],
};
</script>
<style scoped>
.nuxt-link-exact-active {
  color: #5850ec;
}
</style>

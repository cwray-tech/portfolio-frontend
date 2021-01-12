<template>
  <div class="mt-4">
    <NuxtLink
      :to="link"
      no-prefetch
      class="text-base leading-6 text-gray-500 dark:text-gray-200 hover:text-gray-900"
    >
      {{ text }}
    </NuxtLink>
  </div>
</template>
<script>
export default {
  props: ['text', 'link']
}
</script>
<style scoped>
.nuxt-link-exact-active {
  color: #5850ec;
}
</style>

<template>
  <div class="flex space-x-4 flex-wrap">
    <NuxtLink
      :to="'/technologies/' + technology.slug"
      v-for="technology in project.technologies"
      :key="technology.id"
      class="text-base leading-6 text-indigo-600 dark:text-indigo-700 font-semibold tracking-wide py-1 rounded-lg uppercase hover:text-indigo-500 hover:bg-white transition ease-in-out duration-150"
    >
      {{ technology.name }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['project']
}
</script>

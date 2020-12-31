<template>
  <div class="flex flex-wrap -ml-1">
    <NuxtLink
      :to="'/technologies/' + technology.slug"
      v-for="technology in project.technologies"
      :key="technology.id"
      class="text-base mr-2 p-2 leading-6 text-indigo-600 dark:text-black font-semibold tracking-wide py-1 rounded-lg uppercase hover:text-indigo-500 hover:bg-gray-200 dark:hover:bg-gray-500 transition ease-in-out duration-150"
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

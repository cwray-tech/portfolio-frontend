<template>
  <section class="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="relative mx-auto lg:max-w-7xl w-full">
      <div class="mt-6 grid gap-16-2 pt-10 md:grid-cols-2 md:gap-x-5 gap-y-12 w-full">
        <div v-for="category in categories" :key="category.id">
          <NuxtLink :to="'/categories/' + category.slug" class="block">
            <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {{ category.name }}
            </h3>
            <p class="mt-3 text-base leading-6 text-gray-500 dark:text-black">
              {{ category.description }}
            </p>
          </NuxtLink>
          <div class="mt-3">
            <NuxtLink
              :to="'/categories/' + category.slug"
              class="text-base leading-6 font-semibold text-indigo-600 dark:text-black hover:text-indigo-500 transition ease-in-out duration-150"
            >
              View projects and posts
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['categories']
}
</script>

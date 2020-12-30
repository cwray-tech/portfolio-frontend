<template>
  <!-- Posts Section -->
  <section v-if="posts.length != 0" class="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="relative mx-auto lg:max-w-7xl w-full">
      <div v-if="showHeading" class="w-full border-b-2 border-gray-100 dark:border-black pb-6">
        <h2
          v-if="heading"
          class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
        >
          {{ heading }}
        </h2>
        <div class="mt-3 sm:mt-4 lg:grid md:grid-cols-2 md:gap-5 lg:items-center">
          <p v-if="subheading" class="text-xl leading-7 text-gray-500 dark:text-black">
            {{ subheading }}
          </p>
        </div>
      </div>
      <div class="mt-10 grid gap-16-2  md:grid-cols-2 md:gap-x-5 gap-y-12 w-full">
        <div v-for="post in posts" :key="post.id">
          <NuxtLink :to="'/posts/' + post.slug" class="block">
            <Date :date="post.published_at" />
            <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {{ post.title }}
            </h3>
            <p class="mt-3 text-base leading-6 text-gray-500 dark:text-black">
              {{ post.preview }}
            </p>
          </NuxtLink>
          <div class="mt-3">
            <NuxtLink
              :to="'/posts/' + post.slug"
              class="text-base leading-6 font-semibold text-indigo-600 dark:text-black hover:text-indigo-500 transition ease-in-out duration-150"
            >
              Read full post
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['posts', 'showHeading', 'heading', 'subheading']
}
</script>

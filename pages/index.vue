<template>
  <div>
    <section class="lg:relative bg-gray-50">
      <div
        class="mx-auto px-4 lg:px-0 max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left"
      >
        <div class="lg:w-1/2 lg:pl-4 xl:pr-16">
          <h2
            class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl"
          >
            {{ home.name }}
          </h2>
          <p
            class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
          >
            {{ home.title }}
          </p>
          <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <NuxtLink
                :to="home.hero_button_cta_route"
                v-if="home.hero_button_cta_text && home.hero_button_cta_route"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                {{ home.hero_button_cta_text }}
              </NuxtLink>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <NuxtLink
                :to="home.hero_button_2_route"
                v-if="home.hero_button_2_text && home.hero_button_2_route"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                {{ home.hero_button_2_text }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div
        class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
      >
        <img
          class="absolute inset-0 w-full h-full object-cover"
          :src="heroImageUrl"
          :alt="home.title"
        />
      </div>
    </section>
    <section
      class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div class="relative mx-auto lg:max-w-7xl w-full">
        <div class="w-full">
          <h2
            class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
          >
            Recent Posts
          </h2>
          <div
            class="mt-3 sm:mt-4 lg:grid md:grid-cols-2 md:gap-5 lg:items-center"
          >
            <p class="text-xl leading-7 text-gray-500">
              Read some of my latest articles.
            </p>

          </div>
        </div>
        <div
          class="mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 md:grid-cols-2 md:gap-x-5  md:gap-y-12 w-full"
        >
          <div v-for="post in posts" :key="post.id">
            <NuxtLink :to="'/posts/' + post.id" class="block">
              <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                {{ post.title }}
              </h3>
              <p class="mt-3 text-base leading-6 text-gray-500">
                {{ post.preview }}
              </p>
            </NuxtLink>
            <div class="mt-3">
              <NuxtLink
                :to="'/posts/' + post.id"
                class="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
              >
                Read full post
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const home = await $axios.$get("/home-page")
    const heroImageUrl = "http://localhost:1337" + home.hero_image.url
    const posts = await $axios.$get("/posts?_limit=4")
    return { home, heroImageUrl, posts }
  }

};
</script>

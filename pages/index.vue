<template>
  <div>
    <section
      class="bg-gray-50 dark:bg-gray-700 lg:relative lg:min-h-screen lg:flex lg:items-center"
    >
      <div
        class="mx-auto px-4 lg:px-0 max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left"
      >
        <div class="lg:w-1/2 lg:pl-4 xl:pr-16">
          <h2
            class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl"
          >
            {{ home.name }}
          </h2>
          <p
            class="mt-3 max-w-md mx-auto text-lg text-gray-500 dark:text-gray-200 sm:text-xl md:mt-5 md:max-w-3xl"
          >
            {{ home.title }}
          </p>
          <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <NuxtLink
                :to="home.hero_button_cta_route"
                v-if="home.hero_button_cta_text && home.hero_button_cta_route"
                class="w-full flex items-center justify-center px-8 py-3 border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:ring-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                {{ home.hero_button_cta_text }}
              </NuxtLink>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <NuxtLink
                :to="home.hero_button_2_route"
                v-if="home.hero_button_2_text && home.hero_button_2_route"
                class="w-full flex items-center justify-center px-8 py-3 borderransparent text-base leading-6 font-medium rounded-md text-indigo-600 dark:text-black bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:ring-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                {{ home.hero_button_2_text }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div
        class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full flex items-stretch"
      >
        <img
          v-if="home.hero_image"
          class="absolute inset-0 w-full h-full object-cover"
          :src="home.hero_image.url"
          :alt="home.title"
        />
      </div>
    </section>
    <!-- Introduction Area -->
    <section class="relative py-16 bg-white dark:bg-indigo-400 dark:text-white overflow-hidden">
      <div class="relative px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-lg max-w-prose mx-auto mb-6">
          <p
            class="text-base text-center leading-6 text-indigo-600 dark:text-black font-semibold tracking-wide uppercase"
          >
            {{ home.introduction_heading }}
          </p>
          <h1
            class="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-black sm:text-4xl sm:leading-10"
          >
            {{ home.introduction_subheading }}
          </h1>
          <p class="text-xl dark:text-black leading-8" v-if="home.introduction">
            {{ home.introduction }}
          </p>
        </div>
        <div
          class="prose prose-lg md:text-justify dark:text-black mx-auto"
          v-if="home.content"
          v-html="$md.render(home.content)"
        ></div>
      </div>
    </section>
    <LazyProjectList :projects="projects" />

    <LazyPostList
      :posts="posts"
      showHeading="true"
      heading="Latest Posts"
      subheading="Read some of the latest articles I have written on web development and more."
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: {},
      posts: [],
      projects: []
    }
  },
  async fetch() {
    this.home = await this.$axios.$get('/home-page')

    this.posts = await this.$axios.$get('/posts?_limit=4&_sort=published_at:desc')

    this.projects = await this.$axios.$get('/projects?_limit=4&_sort=published_at:desc')
  },
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.home.meta_description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.home.hero_image
            ? this.home.hero_image.url
            : 'https://chriswray.dev/chris-wray-family.jpg'
        }
      ]
    }
  },
  fetchOnServer: true
}
</script>

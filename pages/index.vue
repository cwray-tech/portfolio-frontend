<template>
  <div>
    <section
      class="lg:relative  lg:min-h-screen lg:flex lg:items-center"
    >
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
                class="w-full flex items-center justify-center px-8 py-3 borderransparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                {{ home.hero_button_cta_text }}
              </NuxtLink>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <NuxtLink
                :to="home.hero_button_2_route"
                v-if="home.hero_button_2_text && home.hero_button_2_route"
                class="w-full flex items-center justify-center px-8 py-3 borderransparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
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
        <img v-if="home.hero_image"
          class="absolute inset-0 w-full h-full object-cover"
          :src="apiRoute + home.hero_image.url"
          :alt="home.title"
        />
      </div>
    </section>
    <!-- Introduction Area -->
    <section class="relative py-16 bg-white overflow-hidden">
      <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div class="relative h-full text-lg max-w-prose mx-auto">
          <svg
            class="absolute top-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            class="absolute bottom-0 right-full transform -translate-y-1/2 -translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
        </div>
      </div>
      <div class="relative px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-lg max-w-prose mx-auto mb-6">
          <p
            class="text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase"
          >
            {{ home.introduction_heading }}
          </p>
          <h1
            class="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            {{ home.introduction_subheading }}
          </h1>
          <p class="text-xl text-gray-500 leading-8" v-if="home.introduction">
            {{ home.introduction }}
          </p>
        </div>
        <div
          class="prose prose-lg text-gray-500 mx-auto text-justify"
          v-if="home.content"
          v-html="$md.render(home.content)"
        ></div>
      </div>
    </section>
    <!-- Project Sections -->
    <ProjectList :projects='projects' />

    <!-- Posts Section -->
    <PostList :posts='posts' showHeading='true' />
  </div>
</template>

<script>
export default {
  data () {
    return{
      home: {},
      apiRoute: 'http://localhost:1337',
      posts: [],
      projects: []
    }
  },
  async fetch() {
    this.home = await this.$axios.$get("/home-page")

    this.posts = await this.$axios.$get("/posts?_limit=4")

    this.projects = await this.$axios.$get("/projects?_limit=2")
  },
   head() {
      return {
        title: this.home.name,
        meta: [
          {
            hid: this.home.id,
            name: this.home.name,
            content: this.home.meta_description
          }
        ]
      }
    },
    fetchOnServer: true
}
</script>

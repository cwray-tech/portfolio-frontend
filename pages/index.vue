<template>
  <div>
    <section
      class="lg:relative bg-gray-50 lg:min-h-screen lg:flex lg:items-center"
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
    <section class="bg-white overflow-hidden" v-for="project in projects" :key="project.id">
      <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div
          class="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"
        ></div>
        <div class="mx-auto text-base lg:max-w-none">
          <NuxtLink
            to="/projects"
            class="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase hover:text-indigo-500 transition ease-in-out duration-150"
          >
            Projects
          </NuxtLink>
          <h1
            class="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            {{ project.name }}
          </h1>
        </div>
        <div class="lg:grid lg:grid-cols-2 lg:gap-8">
          <div class="relative mb-8 lg:mb-0 lg:row-start-1 lg:col-start-2">
            <svg
              class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
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
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div
              class="relative text-base mx-auto lg:max-w-none content-center"
            >
              <figure>
                <div class="relative pb-7/12 lg:pb-0">
                  <img
                    :src="apiRoute + project.main_image.url"
                    :alt="project.name"
                    class="rounded-lg shadow-lg object-cover object-center absolute inset-0 w-full h-full lg:static lg:h-auto"
                  />
                </div>
                <figcaption
                  v-if="project.image_caption"
                  class="flex mt-3 text-sm text-gray-500"
                >
                  <!-- Heroicon name: camera -->
                  <svg
                    class="flex-none w-5 h-5 mr-2 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {{ project.image_caption }}
                </figcaption>
              </figure>
            </div>
          </div>
          <div>
            <div class="text-base mx-auto lg:max-w-none">
              <p class="text-lg leading-7 text-gray-500 mb-5">
                {{ project.introduction }}
              </p>
            </div>
            <div
              class="prose text-gray-500 mx-auto max-w-none lg:row-start-1 lg:col-start-1 mb-5"
              v-html="$md.render(project.description)"
            ></div>
            <NuxtLink
              to="/projects"
              class="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
              >View more details</NuxtLink
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Posts Section -->
    <section
      class="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 border-b"
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
          class="mt-6 grid gap-16-2 border-gray-100 pt-10 md:grid-cols-2 md:gap-x-5 md:gap-y-12 w-full"
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
        title: this.home.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: this.home.title,
            name: this.home.title,
            content: this.home.meta_description
          }
        ]
      }
    },
    fetchOnServer: true
}
</script>

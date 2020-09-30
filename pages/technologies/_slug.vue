<template>
  <div>
    <main class="py-10 mx-auto max-w-screen-xl px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 xl:py-28">
      <div class="text-center">
        <h1 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          {{ technology.name }}
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {{ technology.description }}
        </p>
      </div>
    </main>
    <!-- Posts Section -->
    <section
      class="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 border-b"
    >
      <div class="relative mx-auto lg:max-w-7xl w-full">
        <div class="w-full">
          <h2
            class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
          >
            Posts tagged in {{ technology.name }}
          </h2>
          <div
            class="mt-3 sm:mt-4 lg:grid md:grid-cols-2 md:gap-5 lg:items-center"
          >
            <p class="text-xl leading-7 text-gray-500">
              Read some of my latest articles about {{ technology.name }}.
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
      technology: {},
      posts: [],
      apiRoute: 'http://localhost:1337'
    }
  },
  async fetch() {
    this.technology = await this.$axios.$get('/technologies/' + this.$route.params.slug)
    this.posts = this.technology.posts
  },
  head() {
      return {
        title: this.technology.name,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: this.technology.name,
            name: this.technology.name,
            content: this.technology.meta_description
          }
        ]
      }
    },
  fetchOnServer: true
};
</script>

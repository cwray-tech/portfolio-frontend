<template>
<div>
    <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
      <div class="text-center">
        <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          {{ technologyPage.title }}
        </h2>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {{ technologyPage.subtitle }}
        </p>
      </div>
    </main>

    <!-- technologies Section -->
    <section
      class="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 border-b"
    >
      <div class="relative mx-auto lg:max-w-7xl w-full">
        <div
          class="mt-6 grid gap-16-2 border-gray-100 pt-10 md:grid-cols-2 md:gap-x-5 md:gap-y-12 w-full"
        >
          <div v-for="technology in technologies" :key="technology.id">
            <NuxtLink :to="'/technologies/' + technology.id" class="block">
              <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                {{ technology.name }}
              </h3>
              <p class="mt-3 text-base leading-6 text-gray-500">
                {{ technology.description }}
              </p>
            </NuxtLink>
            <div class="mt-3">
              <NuxtLink
                :to="'/technologies/' + technology.id"
                class="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
              >
                View projects and posts
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
      technologyPage: {},
      apiRoute: 'http://localhost:1337',
      technologies: []
    }
  },
  async fetch () {
    this.technologies = await this.$axios.$get('/technologies')
    this.technologyPage = await this.$axios.$get('/technology-page')
  },
  head() {
      return {
        title: this.technologyPage.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: this.technologyPage.title,
            name: this.technologyPage.title,
            content: this.technologyPage.meta_description
          }
        ]
      }
    },
  fetchOnServer: true
}
</script>

<template>
<div>
    <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
      <div class="text-center">
        <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          {{ postPage.title }}
        </h2>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {{ postPage.subtitle }}
        </p>
      </div>
    </main>

    <!-- Posts Section -->
    <PostList :posts='posts' />

  </div>
</template>

<script>

export default {
  data () {
    return{
      postPage: {},
      apiRoute: 'http://localhost:1337',
      posts: []
    }
  },
  async fetch () {
    this.posts = await this.$axios.$get('/posts')
    this.postPage = await this.$axios.$get('/posts-page')
  },
  head() {
      return {
        title: this.postPage.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: this.postPage.title,
            name: this.postPage.title,
            content: this.postPage.meta_description
          }
        ]
      }
    },
  fetchOnServer: true
}
</script>

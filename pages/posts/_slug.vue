<template>
  <div>
    <div class="relative py-16 bg-white dark:bg-indigo-400 overflow-hidden">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto mb-6">
          <NuxtLink
            :to="'/categories/' + post.category.slug"
            v-if="post.category"
            class="text-base text-center block leading-6 text-indigo-600 dark:text-black font-semibold tracking-wide uppercase hover:text-indigo-500 transition ease-in-out duration-150"
          >
            {{ post.category.name }}
          </NuxtLink>
          <h1
            class="mt-2 mb-4 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            {{ post.title }}
          </h1>
        </div>
        <div
          v-if="post.body"
          class="prose prose-lg dark:text-black mx-auto"
          v-html="$md.render(post.body)"
        ></div>
        <div class="prose prose-lg mx-auto mt-4">
          <Date v-if="post.published_at" :date="post.published_at" />
        </div>

        <div class="prose prose-lg mt-6 mx-auto">
          <NuxtLink
            :to="'/technologies/' + technology.slug"
            v-for="technology in post.technologies"
            :key="technology.id"
            class="text-base leading-6 text-indigo-600 dark:text-white font-semibold tracking-wide bg-gray-100 dark:bg-gray-700 py-1 px-3 mr-2 mb-2 rounded-lg uppercase hover:text-indigo-500 hover:bg-white transition ease-in-out duration-150"
          >
            {{ technology.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      post: {}
    }
  },
  async fetch() {
    const posts = await this.$axios.$get('/posts?slug=' + this.$route.params.slug)
    this.post = posts[0]
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.seo_description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.post.image
            ? this.post.image.url
            : 'https://chriswray.dev/chris-wray-family.jpg'
        }
      ],
      script: [
        {
          src:
            'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5072125126275963',
          crossorigin: 'anonymous'
        }
      ]
    }
  },
  fetchOnServer: true
}
</script>

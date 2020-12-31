<template>
  <div>
    <div class="relative py-16 bg-white dark:bg-indigo-400 overflow-hidden">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto mb-6">
          <h1
            class="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            {{ letter.title }}
          </h1>
        </div>
        <div
          v-if="letter.body"
          class="prose prose-lg dark:text-black mx-auto md:text-justify"
          v-html="$md.render(letter.body)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      letter: {}
    }
  },
  async fetch() {
    const letters = await this.$axios.$get('/cover-letters?slug=' + this.$route.params.slug)
    this.letter = letters[0]
  },
  head() {
    return {
      title: this.letter.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.letter.seo_description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.letter.title
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.letter.image
            ? this.letter.image.url
            : 'https://chriswray.dev/chris-wray-family.jpg'
        }
      ]
    }
  },
  fetchOnServer: true
}
</script>

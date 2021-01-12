<template>
  <div>
    <PageHeader :title="coverPage.title" :subtitle="coverPage.subtitle" />
    <!-- Introduction Area -->
    <section class="relative py-16 bg-white dark:bg-indigo-400 dark:text-white overflow-hidden">
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
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            class="absolute bottom-0 right-full transform -translate-x-32"
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
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
        </div>
      </div>
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div
          class="prose prose-lg text-gray-500 dark:text-black mx-auto md:text-justify"
          v-if="coverPage.content"
          v-html="$md.render(coverPage.content)"
        ></div>
      </div>
    </section>

    <LazyPostList
      :posts="posts"
      showHeading="true"
      heading="Latest Posts"
      subheading="Read some of the latest articles I have written on web development and more."
    />

    <LazyLetterList
      class="hidden"
      :letters="letters"
      showHeading="true"
      heading="Cover Letters"
      subheading="Read my cover letters."
    />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      coverPage: {},
      letters: [],
      posts: []
    }
  },
  async fetch() {
    this.coverPage = await this.$axios.$get('/cover-letters-page')
    this.letters = await this.$axios.$get('/cover-letters?_sort=published_at:desc')
    this.posts = await this.$axios.$get('/posts?_sort=published_at:desc')
  },
  computed: {
    title() {
      return this.coverPage.title
        ? this.coverPage.title + ' | Software Engineer'
        : 'Cover Letters | Software Engineer'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.coverPage.meta_description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.coverPage.image
            ? this.coverPage.image.url
            : 'https://chriswray.dev/chris-wray-family.jpg'
        }
      ]
    }
  },
  fetchOnServer: true
}
</script>

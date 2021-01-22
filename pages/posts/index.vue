<template>
  <div>
    <PageHeader :title="postPage.title" :subtitle="postPage.subtitle" />

    <!-- Posts Section -->
    <LazyPostList :posts="posts" />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      postPage: {},
      posts: []
    }
  },
  async fetch() {
    this.posts = await this.$axios.$get('/posts')
    this.postPage = await this.$axios.$get('/posts-page')
  },
  computed: {
    title: function() {
      return this.postPage.title
        ? this.postPage.title + ' | Software Engineer'
        : 'Posts from Chris | Software Engineer'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.postPage.meta_description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.postPage.image
            ? this.postPage.image.url
            : 'https://chriswray.dev/chris-wray-family.jpg'
        }
      ]
    }
  },
  fetchOnServer: true
}
</script>

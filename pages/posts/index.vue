<template>
<div>
    <PageHeader :title='postPage.title' :subtitle='postPage.subtitle' />

    <!-- Posts Section -->
    <PostList :posts='posts' />

  </div>
</template>

<script>

export default {
  data () {
    return{
      postPage: {},
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

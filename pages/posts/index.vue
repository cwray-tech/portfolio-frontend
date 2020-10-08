<template>
  <div>
    <PageHeader :title="postPage.title" :subtitle="postPage.subtitle" />

    <!-- Posts Section -->
    <PostList :posts="posts" />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      postPage: {},
      posts: [],
    };
  },
  async fetch() {
    this.posts = await this.$axios.$get("/posts?_sort=published_at:desc");
    this.postPage = await this.$axios.$get("/posts-page");
  },
  head() {
    return {
      title: this.postPage.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.postPage.meta_description,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.postPage.title,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.postPage.image ? this.postPage.image.url : "https://chriswray.dev/chris-wray-family.jpg",
        },
      ],
    };
  },
  fetchOnServer: true,
};
</script>

<template>
  <div>
    <PageHeader :title="category.name" :subtitle="category.description" />

    <ProjectList :projects="projects" />

    <PostList
      :posts="posts"
      showHeading="true"
      :heading="'Read posts in ' + category.name"
    />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      category: {},
      posts: [],
      projects: [],
    };
  },
  async fetch() {
    const categories = await this.$axios.$get(
      "/categories?slug=" + this.$route.params.slug
    );
    this.category = categories[0];
    this.posts = this.category.posts;
    this.projects = this.category.projects;
  },
  head() {
    return {
      title: this.category.name,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.category.description,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.category.name,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.category.image
            ? this.category.image.url
            : "https://chriswray.dev/chris-wray-family.jpg",
        },
      ],
    };
  },
  fetchOnServer: true,
};
</script>

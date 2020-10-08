<template>
  <div>
    <PageHeader :title='technology.name' :subtitle='technology.description' :link='technology.link' :linkText='technology.link_text'/>

    <ProjectList :projects='projects' />

    <PostList :posts='posts'  showHeading='true' :heading='"Read posts in " + technology.name' />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data () {
    return{
      technology: {},
      posts: [],
      projects: []
    }
  },
  async fetch() {
    const technologies = await this.$axios.$get('/technologies?slug=' + this.$route.params.slug)
    this.technology = technologies[0]
    this.posts = this.technology.posts
    this.projects = this.technology.projects
  },
  head() {
      return {
        title: this.technology.name,
        meta: [
          {
          hid: "description",
          name: "description",
          content: this.technology.description,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.technology.name,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.technology.image
            ? this.technology.image.url
            : "https://chriswray.dev/chris-wray-family.jpg",
        },
        ]
      }
    },
  fetchOnServer: true
};
</script>

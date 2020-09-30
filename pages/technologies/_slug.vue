<template>
  <div>
    <PageHeader :title='technology.name' :subtitle='technology.description' />

    <ProjectList :projects='projects' />

    <PostList :posts='posts'  showHeading='true' :heading='"Read posts in " + technology.name' />
  </div>
</template>

<script>
export default {
  data () {
    return{
      technology: {},
      posts: [],
      projects: [],
      apiRoute: 'http://localhost:1337'
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
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: this.technology.name,
            name: this.technology.name,
            content: this.technology.meta_description
          }
        ]
      }
    },
  fetchOnServer: true
};
</script>

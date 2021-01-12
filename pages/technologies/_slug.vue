<template>
  <div>
    <PageHeader
      :title="technology.name"
      :subtitle="technology.description"
      :link="technology.link"
      :linkText="technology.link_text"
    />

    <LazyProjectList :projects="projects" />

    <LazyPostList :posts="posts" showHeading="true" :heading="'Read posts in ' + technology.name" />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
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
  computed: {
    title: function() {
      return this.technology.name
        ? this.technology.name + ' Developer | Chris Wray | View Projects and Posts'
        : 'Chris Wray | Frontend Web Developer and Engineer'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.technology.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.technology.image
            ? this.technology.image.url
            : 'https://chriswray.dev/chris-wray-family.jpg'
        }
      ]
    }
  },
  fetchOnServer: true
}
</script>

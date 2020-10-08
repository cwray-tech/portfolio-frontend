<template>
<div>
  <PageHeader :title='technologyPage.title' :subtitle='technologyPage.subtitle' />

    <!-- Technologies Section -->
  <TechnologyList :technologies="technologies" />

  </div>
</template>

<script>

export default {
  scrollToTop: true,
  data () {
    return{
      technologyPage: {},
      technologies: []
    }
  },
  async fetch () {
    this.technologies = await this.$axios.$get('/technologies')
    this.technologyPage = await this.$axios.$get('/technology-page')
  },
  head() {
      return {
        title: this.technologyPage.title,
        meta: [
          {
          hid: "description",
          name: "description",
          content: this.technologyPage.meta_description,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.technologyPage.title,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.technologyPage.image ? this.technologyPage.image.url : "https://chriswray.dev/chris-wray-family.jpg",
        },
        ]
      }
    },
  fetchOnServer: true
}
</script>

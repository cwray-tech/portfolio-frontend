<template>
<div>
  <PageHeader :title='technologyPage.title' :subtitle='technologyPage.subtitle' />

    <!-- Technologies Section -->
  <TechnologyList :technologies="technologies" />

  </div>
</template>

<script>

export default {
  data () {
    return{
      technologyPage: {},
      apiRoute: 'http://localhost:1337',
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
            hid: this.technologyPage.title,
            name: this.technologyPage.title,
            content: this.technologyPage.meta_description
          }
        ]
      }
    },
  fetchOnServer: true
}
</script>

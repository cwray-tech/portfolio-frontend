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
            hid: 'description',
            name: 'description',
            content: this.technologyPage.meta_description
          }
        ]
      }
    },
  fetchOnServer: true
}
</script>

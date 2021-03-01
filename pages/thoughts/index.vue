<template>
  <div>
    <PageHeader :title="thoughtPage.title" 
    :subtitle="thoughtPage.subtitle" />

    <!-- thoughts Section -->
    <LazyThoughtList :thoughts="thoughts" />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      thoughtPage: {
        title: "My Thoughts",
        description: "Read them here."
      },
      thoughts: []
    }
  },
  computed: {
    title: function() {
      return this.thoughtPage.title
        ? this.thoughtPage.title + ' | Chris Wray | Frontend Engineer'
        : 'Chris Wray | Frontend Engineer'
    }
  },
  async fetch() {
    this.thoughts = await this.$axios.$get('/thoughts')
    this.thoughtPage = await this.$axios.$get('/thought-page')
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.thoughtPage.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.thoughtPage.image
            ? this.thoughtPage.image.url
            : 'https://chriswray.dev/chris-wray-family.jpg'
        }
      ]
    }
  },
  fetchOnServer: true
}
</script>

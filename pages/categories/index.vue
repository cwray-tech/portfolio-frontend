<template>
  <div>
    <PageHeader :title="categoryPage.title" :subtitle="categoryPage.subtitle" />

    <!-- Categories Section -->
    <LazyCategoryList :categories="categories" />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      categoryPage: {},
      categories: []
    }
  },
  computed: {
    title: function() {
      return this.categoryPage.title
        ? this.categoryPage.title + ' | Chris Wray | Frontend Engineer'
        : 'Chris Wray | Frontend Engineer'
    }
  },
  async fetch() {
    this.categories = await this.$axios.$get('/categories')
    this.categoryPage = await this.$axios.$get('/category-page')
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.categoryPage.meta_description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.categoryPage.image
            ? this.categoryPage.image.url
            : 'https://chriswray.dev/chris-wray-family.jpg'
        }
      ]
    }
  },
  fetchOnServer: true
}
</script>

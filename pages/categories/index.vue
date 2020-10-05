<template>
<div>
  <PageHeader :title='categoryPage.title' :subtitle='categoryPage.subtitle' />

    <!-- Categories Section -->
  <CategoryList :categories='categories' />
  </div>
</template>

<script>

export default {
  scrollToTop: true,
  data () {
    return{
      categoryPage: {},
      categories: []
    }
  },
  async fetch () {
    this.categories = await this.$axios.$get('/categories');
    this.categoryPage = await this.$axios.$get('/category-page');
  },
  head() {
      return {
        title: this.categoryPage.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.categoryPage.meta_description
          }
        ]
      }
    },
  fetchOnServer: true
}
</script>

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
          hid: "description",
          name: "description",
          content: this.categoryPage.meta_description,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.categoryPage.title,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.categoryPage.image ? this.categoryPage.image.url : "https://chriswray.dev/chris-wray-family.jpg",
        },
        ]
      }
    },
  fetchOnServer: true
}
</script>

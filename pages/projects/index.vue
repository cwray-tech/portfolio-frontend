<template>
  <div>
    <PageHeader :title='projectPage.title' :subtitle='projectPage.subtitle' />
    <ProjectList :projects='projects' />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      projectPage: {},
      projects: [],
    };
  },
  async fetch() {
    this.projects = await this.$axios.$get("/projects")

    this.projectPage = await this.$axios.$get("/projects-page"
    )
  },
  head() {
    return {
      title: this.projectPage.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.projectPage.meta_description,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.projectPage.title,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.projectPage.image ? this.projectPage.image.url : "https://chriswray.dev/chris-wray-family.jpg",
        },
      ],
    };
  },
  fetchOnServer: true,
};
</script>

<template>
  <div>
    <PageHeader :title='projectPage.title' :subtitle='projectPage.subtitle' />
    <ProjectList :projects='projects' />
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectPage: {},
      apiRoute: process.env.API_ROUTE,
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
          hid: this.projectPage.title,
          name: this.projectPage.title,
          content: this.projectPage.meta_description,
        },
      ],
    };
  },
  fetchOnServer: true,
};
</script>

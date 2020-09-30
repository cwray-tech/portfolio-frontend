<template>
  <div>
    <section>
      <div
        class="py-10 mx-auto max-w-screen-xl px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 xl:py-28"
      >
        <div class="text-center">
          <h1
            class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
          >
            {{ projectPage.title }}
          </h1>
          <p
            class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            {{ projectPage.subtitle }}
          </p>
        </div>
      </div>
    </section>
    <ProjectList :projects="projects" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectPage: {},
      apiRoute: "http://localhost:1337",
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
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
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

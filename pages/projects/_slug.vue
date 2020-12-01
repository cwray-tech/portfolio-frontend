<template>
  <div>
    <PageHeader :title="project.name" :subtitle="project.introduction" />
    <div class="relative py-16 bg-white dark:bg-indigo-400 overflow-hidden">
      <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div class="relative h-full text-lg max-w-prose mx-auto">
          <svg
            class="absolute top-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            class="absolute bottom-0 right-full transform -translate-y-0 -translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
        </div>
      </div>
      <div class="relative px-4 sm:px-6 lg:px-8 min-h-screen">
        <div class="text-lg max-w-prose mx-auto mb-6">
          <h1
            class="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            Project Overview
          </h1>
        </div>
        <div
          v-if="project.description"
          class="prose prose-lg dark:text-black mx-auto"
          v-html="$md.render(project.description)"
        ></div>
        <div class="prose prose-lg dark:text-black mx-auto mt-8">
          <ProjectLinks :project="project" />
          <ProjectTechnologies :project="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      project: {}
    }
  },
  async fetch() {
    const projects = await this.$axios.$get('/projects?slug=' + this.$route.params.slug)
    this.project = projects[0]
  },
  computed: {
    title: function() {
      return this.project.name
        ? 'Learn About ' + this.project.name + ' | Chris Wray | Software Engineer'
        : 'Chris Wray | Software Engineer'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.project.preview
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.project.main_image
            ? this.project.main_image.url
            : 'https://chriswray.dev/chris-wray-family.jpg'
        }
      ]
    }
  },
  fetchOnServer: true
}
</script>

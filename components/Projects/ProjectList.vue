<template>
  <div>
    <section
      class="bg-white dark:bg-indigo-400  overflow-hidden"
      v-for="project in projects"
      :key="project.id"
    >
      <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="hidden lg:block absolute top-0 bottom-0 left-3/4 w-screen"></div>
        <div class="mx-auto text-base lg:max-w-none">
          <NuxtLink
            v-if="project.category.name"
            :to="'/categories/' + project.category.slug"
            class="text-base leading-6 text-indigo-600 dark:text-black font-semibold tracking-wide uppercase hover:text-indigo-500 transition ease-in-out duration-150"
            >{{ project.category.name }}</NuxtLink
          >
          <h1
            class="mt-4 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-black sm:text-4xl sm:leading-10"
          >
            {{ project.name }}
          </h1>
        </div>
        <div class="lg:grid lg:grid-cols-2 lg:gap-8">
          <div class="relative mb-8 lg:mb-0 lg:row-start-1 lg:col-start-2">
            <svg
              class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div class="relative text-base mx-auto lg:max-w-none content-center">
              <figure class="mb-4">
                <div class="relative pb-7/12 lg:pb-0">
                  <img
                    :v-if="project.main_image.formats.large"
                    :src="project.main_image.formats.large.url"
                    :alt="project.name"
                    loading="lazy"
                    class="rounded-lg shadow-lg object-cover object-center absolute inset-0 w-full h-full lg:static lg:h-auto"
                  />
                </div>
                <figcaption
                  v-if="project.image_caption"
                  class="flex mt-3 text-sm text-gray-500 dark:text-black"
                >
                  <!-- Heroicon name: camera -->
                  <svg
                    class="flex-none w-5 h-5 mr-2 text-gray-400 dark:text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {{ project.image_caption }}
                </figcaption>
              </figure>
              <ProjectTechnologies :project="project" />
            </div>
          </div>
          <div>
            <div class="text-base mx-auto lg:max-w-none">
              <ProjectLinks :project="project" />
              <p class="text-xl leading-7dark:text-black mb-5">
                {{ project.introduction }}
              </p>
            </div>
            <NuxtLink
              v-if="project.preview"
              :to="'/projects/' + project.slug"
              class="prose prose-lg dark:text-black mx-auto max-w-none lg:row-start-1 lg:col-start-1 mb-5"
              v-html="$md.render(project.preview)"
            ></NuxtLink>
            <NuxtLink
              :to="'/projects/' + project.slug"
              class="text-base leading-6 font-semibold text-indigo-600 dark:text-black hover:text-indigo-500 transition ease-in-out duration-150"
              >View more details</NuxtLink
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['projects']
}
</script>

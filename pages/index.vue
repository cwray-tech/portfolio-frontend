<template>
  <div class="">
    <div>
      <!-- This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 -->
      <div class="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div class="max-w-max-content lg:max-w-7xl mx-auto">
          <div class="relative z-10 mb-8 md:mb-2 md:px-6">
            <div class="text-base max-w-prose lg:max-w-6x1">
              <p class="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">{{ home.name }}</p>
              <h1 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-6xl sm:leading-snug">
                {{  home.title }}</h1>
            </div>
          </div>
          <div class="relative">
            <svg class="hidden md:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384">
              <defs>
                <pattern id="95e8f2de-6d30-4b7e-8159-f791729db21b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
            </svg>
            <svg class="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20" width="404" height="384" fill="none" viewBox="0 0 404 384">
              <defs>
                <pattern id="7a00fe67-0343-4a3c-8e81-c145097a3ce0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
            </svg>
            <div class="relative md:bg-white md:p-6">
              <div class="lg:grid lg:grid-cols-2 lg:gap-6 mb-8">
                <div class="prose prose-lg text-gray-500 mb-6 lg:max-w-none lg:mb-0">
                  {{ home.content_left }}
                </div>
                <div class="prose prose-lg text-gray-500">
                  {{ home.content_right }}
                </div>
              </div>
              <div class="inline-flex rounded-md shadow">
                <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out">
                  Hire Chris
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  async asyncData ({ $axios }) {
    const home = await $axios.$get('http://localhost:1337/home-page')
    return { home }
  }
}
</script>

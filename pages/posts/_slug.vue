<template>
  <div>
    <div class="relative py-16 bg-white overflow-hidden">
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
            <rect
              width="404"
              height="384"
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
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
            <rect
              width="404"
              height="384"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            class="absolute bottom-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
            <rect
              width="404"
              height="384"
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto mb-6">
          <NuxtLink
            :to="'/categories/' + post.category.slug"
            v-if="post.category"
            class="text-base text-center block leading-6 text-indigo-600 font-semibold tracking-wide uppercase hover:text-indigo-500 transition ease-in-out duration-150"
          >
            {{ post.category.name }}
          </NuxtLink>
          <h1
            class="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            {{ post.title }}
          </h1>
        </div>
        <div
          v-if="post.body"
          class="prose prose-lg text-gray-500 mx-auto md:text-justify"
          v-html="$md.render(post.body)"
        ></div>
        <div class="prose prose-lg mt-8 mx-auto">
          <NuxtLink
            :to="'/technologies/' + technology.slug"
            v-for="technology in post.technologies"
            :key="technology.id"
            class="text-base leading-6 text-indigo-600 font-semibold tracking-wide bg-gray-100 py-1 px-3 mr-2 mb-2 rounded-lg uppercase hover:text-indigo-500 hover:bg-white transition ease-in-out duration-150"
          >
            {{ technology.name }}
          </NuxtLink>
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
      post: {},
    };
  },
  async fetch() {
    const posts = await this.$axios.$get(
      "/posts?slug=" + this.$route.params.slug
    );
    this.post = posts[0];
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.body,
        },
      ],
    };
  },
  fetchOnServer: true,
};
</script>

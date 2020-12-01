<template>
  <section class="">
    <div class="py-10 mx-auto max-w-screen-xl px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 xl:py-28">
      <div class="text-center">
        <h1
          class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
        >
          {{ title }}
        </h1>

        <p
          v-if="subtitle"
          class="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-black sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
        >
          {{ subtitle }}
        </p>
        <a
          v-if="link && linkText"
          rel="noopener"
          target="_blank"
          class="block mt-3 md:pt-5 text-base leading-6 font-semibold text-indigo-600 dark:text-black hover:text-indigo-500 transition ease-in-out duration-150"
          :href="link"
        >
          {{ linkText }}
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'link', 'linkText']
}
</script>

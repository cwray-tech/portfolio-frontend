<template>
  <section>
      <div
        class="py-10 mx-auto max-w-screen-xl px-4 sm:py-12 sm:px-6 md:py-16 lg:py-20 xl:py-28"
      >
        <div class="text-center">
          <h1
            class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
          >
            {{ title }}
          </h1>
          <p v-if="subtitle"
            class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            {{ subtitle }}
          </p>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  props: ['title', 'subtitle']
}
</script>

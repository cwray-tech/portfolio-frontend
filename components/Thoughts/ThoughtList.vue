<template>
  <section class="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="relative mx-auto lg:max-w-7xl w-full">
      <div class="mt-6 grid gap-16-2 pt-10 md:grid-cols-2 md:gap-x-5 gap-y-12 w-full">
        <div v-for="thought in thoughts" :key="thought.id">
          <div class="block">
            <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {{ thought.thought }}
            </h3>  
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['thoughts']
}
</script>

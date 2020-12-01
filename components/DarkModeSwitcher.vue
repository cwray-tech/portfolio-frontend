<template>
  <div class="fixed bottom-1 right-1">
    <ul class="flex pb-2">
      <li v-for="color of colors" :key="color">
        <component
          :is="`icon-${color}`"
          :class="getClasses(color)"
          class="h-10 w-10 bg-gray-100 text-indigo-500 rounded mr-2 p-2"
          @click="$colorMode.preference = color"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'

export default {
  components: {
    IconLight,
    IconDark
  },
  data() {
    return {
      colors: ['light', 'dark']
    }
  },
  methods: {
    getClasses(color) {
      // Does not set classes on ssr preference is system (because we know them on client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    }
  }
}
</script>

<style scoped>
.feather-moon.selected {
  color: #5850ec;
  background-color: black;
}
.feather-sun.selected {
  background-color: #5850ec;
  color: white;
}
</style>

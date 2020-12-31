<template>
  <div class="relative z-50">
    <button
      class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
      @click="toggleDropdown"
    >
      <slot name="toggle" />
    </button>
    <div v-show="dropdownOpen" class="fixed inset-0 cursor-pointer" @click="toggleDropdown"></div>
    <transition name="fade">
      <div
        v-cloak
        v-show="dropdownOpen"
        class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
      >
        <div
          class="py-1 rounded-md bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      dropdownOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen
    }
  }
}
</script>
<style>
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

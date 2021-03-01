<template>
  <div class="relative z-50 bg-white dark:bg-gray-900 dark:text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div class="lg:w-0 lg:flex-1">
          <NuxtLink to="/" class="flex">
            <img class="h-8 w-auto sm:h-12" src="/web-programming.svg" alt="Website Logo" />
          </NuxtLink>
        </div>

        <div class="-mr-2 -my-2 md:hidden">
          <button
            @click="toggleNav"
            aria-label="Mobile Menu Button"
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
          >
            <!-- Heroicon name: menu -->
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <DesktopNavLinks />

        <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
          <span class="inline-flex rounded-md shadow-sm">
            <NuxtLink
              to="/contact"
              class="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:ring-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            >
              Contact
            </NuxtLink>
          </span>
        </div>

      </div>
    </div>

    <transition name="fade">
      <div
        v-show="navOpen"
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div class="rounded-lg shadow-lg">
          <div
            class="rounded-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-black divide-y-2 divide-gray-50"
          >
            <div class="pt-5 pb-6 px-5 space-y-6">
              <div class="flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="/web-programming.svg" alt="Website Logo" />
                </div>
                <div class="-mr-2">
                  <button
                    @click="toggleNav"
                    type="button"
                    aria-label="Close Mobile Menu"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                    <!-- Heroicon name: x -->
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <MobileNavLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      this.navOpen = false
    }
  },
  data: function() {
    return {
      navOpen: false,
    }
  },
  methods: {
    toggleNav() {
      this.navOpen ? (this.navOpen = false) : (this.navOpen = true)
    }
  }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<template>
  <nav class="grid gap-y-8">
    <NuxtLink
      v-for="navLink in navLinks"
      :key="navLink.title"
      :to="navLink.route"
      class="
        -m-3
        p-3
        flex
        items-center
        space-x-3
        rounded-md
        hover:bg-gray-50
        transition
        ease-in-out
        duration-150
      "
    >
      <svg
        class="flex-shrink-0 h-6 w-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          :d="navLink.iconDContent"
        ></path>
      </svg>
      <div class="text-base leading-6 font-medium text-gray-900 dark:text-white">
        {{ navLink.title }}
      </div>
    </NuxtLink>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      navLinks: [
        {
          title: 'Home',
          iconDContent:
            'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
          route: '/'
        },
        {
          title: 'Projects',
          iconDContent:
            'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
          route: '/projects'
        },
        {
          title: 'Posts',
          iconDContent:
            'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
          route: '/posts'
        },
        {
          title: 'Categories',
          iconDContent:
            'M15.2322 5.23223L18.7677 8.76777M16.7322 3.73223C17.7085 2.75592 19.2914 2.75592 20.2677 3.73223C21.244 4.70854 21.244 6.29146 20.2677 7.26777L6.5 21.0355H3V17.4644L16.7322 3.73223Z',
          route: '/categories'
        },
        {
          title: 'Technologies',
          iconDContent: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
          route: '/technologies'
        },
        {
          title: 'Contact',
          iconDContent:
            'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
          route: '/contact'
        }
      ]
    }
  }
}
</script>
<template>
  <nav class="hidden md:flex space-x-10">
    <DesktopNavLink
      v-for="navLink in navLinks"
      :key="navLink.title"
      :link="navLink.route"
      :text="navLink.title"
    />
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      navLinks: [
        {
          title: 'Home',
          route: '/'
        },
        {
          title: 'Projects',
          route: '/projects'
        },
        {
          title: 'Posts',
          route: '/posts'
        },
        {
          title: 'Categories',
          route: '/categories'
        },
        {
          title: 'Technologies',
          route: '/technologies'
        }
      ]
    }
  }
}
</script>
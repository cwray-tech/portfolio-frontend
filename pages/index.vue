<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        {{ home.title }}
      </h1>
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

<template>
  <div class="container">
    <div>
      <h1>
        Posts by Chris
      </h1>
      <div v-for="post in posts" :key="post.id">
        <h2>
          {{ post.title }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  async asyncData ({ $axios }) {
    const posts = await $axios.$get('http://localhost:1337/posts')
    return { posts }
  }
}
</script>

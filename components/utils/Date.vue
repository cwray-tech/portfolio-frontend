<template>
  <p class="text-sm text-gray-500">
    <time datetime="2020-03-16">{{ $dateFns.format(date, 'MMMM d, yyyy') }}</time>
  </p>
</template>
<script>
export default {
  props: ['date']
}
</script>

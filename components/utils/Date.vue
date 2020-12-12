<template>
  <p class="text-base text-center block leading-6 text-black font-semibold tracking-wide uppercase">
    {{ $dateFns.format(date, 'MMMM d yyyy') }}
  </p>
</template>
<script>
export default {
  props: ['date']
}
</script>

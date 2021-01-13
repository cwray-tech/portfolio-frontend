<template>
  <div>
    <PageHeader :title="resume.title" :subtitle="resume.subtitle" />
    <div class="relative py-16 bg-white overflow-hidden">
      <div class="relative prose-lg px-4 sm:px-6 lg:px-8 mx-auto">
        <embed :src="resume.resume_pdf.url" type="application/pdf" width="100%" height="800" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      resume: {}
    }
  },
  async fetch() {
    this.resume = await this.$axios.$get('/resume')
  }
}
</script>

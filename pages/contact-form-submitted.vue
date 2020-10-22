<template>
  <div class="relative py-16 bg-white overflow-hidden">
    <div class="relative px-4 sm:px-6 lg:px-8 min-h-screen text-center">
      <div class="text-lg max-w-prose mx-auto mb-6">
        <p
          class="text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase"
        >
          A Form was Submitted
        </p>
        <h1
          class="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >
          You did it!
        </h1>
        <p class="text-xl text-gray-500 leading-8 text-center">
          I am proud of you! You successfully submitted a contact form on my website.
        </p>
      </div>
      <div class="prose prose-lg text-gray-500 mx-auto text-center">
        <p>Thank you. I will do my best to respond quickly.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: 'Success! The Form was submitted. (Whew)',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A contact form was submitted.'
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <div>
      <div v-if="success" class="rounded bg-indigo-500 text-white text-lg p-4">
        Great! Your message has been sent successfully. I will try to respond quickly.
      </div>
      <form
        v-else
        name="Contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        v-on:submit.prevent="sendMessage"
        class="grid grid-cols-1 gap-y-6"
      >
        <div v-if="errored" class="rounded bg-red-200 text-lg p-4">
          Bummer, Something went wrong. Did you fill out all of the fields?
        </div>
        <input type="hidden" name="form-name" value="Contact" />
        <p class="hidden">
          <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        </p>
        <div>
          <label for="full_name" class="sr-only">Full name*</label>
          <div class="relative rounded-md shadow-sm">
            <input
              v-model="form.name"
              required
              name="name"
              type="text"
              id="full_name"
              class="
                border-gray-300
                rounded-md
                focus:ring-indigo-500
                focus:border-indigo-500
                w-full
              "
              placeholder="Full name*"
            />
          </div>
        </div>

        <div>
          <label for="email" class="sr-only">Email*</label>
          <div class="relative rounded-md shadow-sm">
            <input
              required
              v-model="form.email"
              name="email"
              id="email"
              type="email"
              class="
                border-gray-300
                rounded-md
                focus:ring-indigo-500
                focus:border-indigo-500
                w-full
              "
              placeholder="Email*"
            />
          </div>
        </div>
        <div>
          <label for="phone" class="sr-only">Phone</label>
          <div class="relative rounded-md shadow-sm">
            <input
              v-model="form.phone"
              name="phone"
              type="text"
              id="phone"
              class="
                border-gray-300
                rounded-md
                focus:ring-indigo-500
                focus:border-indigo-500
                w-full
              "
              placeholder="Phone"
            />
          </div>
        </div>
        <div>
          <label for="message" class="sr-only">Message</label>
          <div class="relative rounded-md shadow-sm">
            <textarea
              required
              v-model="form.message"
              name="message"
              id="message"
              rows="4"
              class="
                border-gray-300
                rounded-md
                focus:ring-indigo-500
                focus:border-indigo-500
                w-full
              "
              placeholder="Message*"
            ></textarea>
          </div>
        </div>
        <div class="">
          <span class="inline-flex rounded-md shadow-sm">
            <button
              type="submit"
              class="
                inline-flex
                justify-center
                py-3
                px-6
                border border-transparent
                text-base
                leading-6
                font-medium
                rounded-md
                text-white
                bg-indigo-600
                hover:bg-indigo-500
                focus:outline-none
                focus:border-indigo-700
                focus:ring-indigo
                active:bg-indigo-700
                transition
                duration-150
                ease-in-out
              "
            >
              {{ loading ? 'Sending Message...' : 'Submit' }}
            </button>
          </span>
        </div>
        <div
          v-if="loading"
          class="LoadingNotification rounded bg-orange-500 text-white text-lg p-4"
        >
          If this takes forever, I am so sorry in advance. My backend is hosted on Heroku for free,
          and the server has to rebuild if it has been a while since a form has been submitted.
        </div>
      </form>
    </div>
  </div>
</template>
<script>
const qs = require('qs')
export default {
  data() {
    return {
      loading: false,
      success: false,
      errored: false,
      form: {
        'form-name': 'Contact',
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    sendMessage() {
      this.loading = true

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: qs.stringify(this.form)
      })
        .then(() => {
          this.success = true
          this.errored = false
        })
        .catch(() => {
          this.errored = true
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
<style scoped>
.LoadingNotification {
  animation: 5s appear;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
}
</style>

<template>
  <div>
    <div v-if="isBot" class="rounded bg-orange-500 text-white text-lg p-4">
      Great! You have proven to be a bot! I've destroyed the form from the page, and acted like you successfully sent the form.
    </div>
    <div v-else>
    <div v-if="success" class="rounded bg-indigo-500 text-white text-lg p-4">
      Great! Your message has been sent successfully. I will try to respond
      quickly.
    </div>
    <form
      v-else
      v-on:submit.prevent="sendMessage"
      name="contact-form"
      data-netlify="true"
      class="grid grid-cols-1 gap-y-6"
    >
      <div v-if="errored" class="rounded bg-red-200 text-lg p-4">
        Bummer, Something went wrong. Did you fill out all of the fields?
      </div>
      <div>
        <label for="full_name" class="sr-only">Full name*</label>
        <div class="relative rounded-md shadow-sm">
          <input
            v-model="name"
            required
            name="name"
            id="full_name"
            class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            placeholder="Full name*"
          />

        </div>
      </div>
      <div class="hidden">
            <label class="sr-only"
              >Don’t fill this out if you're human: </label>
              <input v-model="bot" name="bot-field" placeholder="This field is only for the robots." class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            />
      </div>
      <div>
        <label for="email" class="sr-only">Email*</label>
        <div class="relative rounded-md shadow-sm">
          <input
            required
            v-model="email"
            name="email"
            id="email"
            type="email"
            class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            placeholder="Email*"
          />
        </div>
      </div>
      <div>
        <label for="phone" class="sr-only">Phone</label>
        <div class="relative rounded-md shadow-sm">
          <input
            v-model="phone"
            name="phone"
            id="phone"
            class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            placeholder="Phone"
          />
        </div>
      </div>
      <div>
        <label for="message" class="sr-only">Message</label>
        <div class="relative rounded-md shadow-sm">
          <textarea
            required
            v-model="message"
            name="message"
            id="message"
            rows="4"
            class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            placeholder="Message*"
          ></textarea>
        </div>
      </div>
      <div class="">
        <span class="inline-flex rounded-md shadow-sm">
          <button
            type="submit"
            class="inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            {{ loading ? "Sending Message..." : "Submit" }}
          </button>
        </span>
      </div>
    </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      success: false,
      errored: false,
      isBot: false,
      name: "",
      bot: null,
      email: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    sendMessage() {
      this.loading = true;
      if(this.bot != null){
        this.isBot = true;
      }
      else {
        this.$axios
        .post("/messages", {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message,
        })
        .then(() => {
          this.success = true;
          this.errored = false;
        })
        .catch(() => {
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
        });
      }

    },
  },
};
</script>

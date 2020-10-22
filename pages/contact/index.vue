<template>
  <div>
    <PageHeader :title="contactPage.title" :subtitle="contactPage.subtitle" />

    <div class="relative">
      <div class="absolute inset-0">
        <div class="absolute inset-y-0 left-0 w-1/2"></div>
      </div>
      <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div class="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div class=" mx-auto">
            <h2
              class="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9"
            >
              {{ contactPage.subheading }}
            </h2>
            <p class="mt-3 text-lg leading-6 text-gray-500 dark:text-gray-700">
              {{ contactPage.contact_text }}
            </p>
            <dl class="mt-8 text-base leading-6 text-gray-500 dark:text-gray-700">
              <div>
                <dt class="sr-only">Phone number</dt>
                <dd class="flex">
                  <!-- Heroicon name: phone -->
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span class="ml-3">{{ contactPage.phone }}</span>
                </dd>
              </div>
              <div class="mt-3">
                <dt class="sr-only">Email</dt>
                <dd class="flex">
                  <!-- Heroicon name: mail -->
                  <svg
                    class="flex-shrink-0 h-6 w-6 text-gray-400 dark:text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span class="ml-3"> {{ contactPage.email }} </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          class="py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12"
        >
          <div class="mx-auto lg:max-w-none">
            <form
      action="/contact-form-submitted"
      name="contact-form"
      class="grid grid-cols-1 gap-y-6"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
    <div></div>
      <div>
        <label for="full_name" class="sr-only">Full name*</label>
        <div class="relative rounded-md shadow-sm">
          <input
            required
            name="full_name"
            id="full_name"
            class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            placeholder="Full name*"
          />

        </div>
      </div>
      <div class="hidden">
            <label class="sr-only"
              >Don’t fill this out if you're human: </label>
              <input name="bot-field" placeholder="This field is only for the robots." class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            />
      </div>
      <div>
        <label for="email" class="sr-only">Email*</label>
        <div class="relative rounded-md shadow-sm">
          <input
            required
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
            name="message"
            id="message"
            rows="4"
            class="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
            placeholder="Message*"
          ></textarea>
        </div>
      </div>
      <div>
        <span class="inline-flex rounded-md shadow-sm">
          <button
            type="submit"
            class="inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Submit
          </button>
        </span>
      </div>
    </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      contactPage: {}
    };
  },
  async fetch() {
    this.contactPage = await this.$axios.$get("/contact-page");
  },
  head() {
    return {
      title: this.contactPage.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.contactPage.meta_description,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.contactPage.title,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.contactPage.image ? this.contactPage.image.url : "https://chriswray.dev/chris-wray-family.jpg",
        },
      ],
    };
  },
  fetchOnServer: true,
};
</script>

<template>
  <div>
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
      <div class="">
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
</template>

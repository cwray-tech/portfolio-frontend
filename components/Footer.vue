<template>
  <div class="bg-white dark:bg-gray-900  py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div class="lg:max-w-7xl w-full mx-auto">
      <div class="lg:grid lg:grid-cols-3 lg:gap-20">
        <div class="lg:col-span-1">
          <img class="h-10" src="/web-programming-gray.svg" alt="Chris Wray website logo" />
          <select
            v-model="$colorMode.preference"
            class="mt-4 block form-select transition duration-150 ease-in-out sm:text-sm sm:leading-5 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
          >
            <option value="system">System Display</option>
            <option value="light">Light Mode</option>
            <option value="dark">Dark Mode</option>
          </select>
          <p class="mt-8 text-gray-500 dark:text-gray-200 text-base leading-6">
            Trying to do my part in making the world a better place.
          </p>
          <p class="mt-3 text-gray-500 dark:text-gray-200 text-base leading-6">
            This site is hosted for free, so I am thanking the services I am using by adding a link
            to their websites here in the footer.
          </p>
          <div class="mt-8 flex">
            <a
              href="https://github.com/cwray-tech"
              target="_blank"
              rel="noopener"
              class="text-gray-400 dark:text-gray-100 hover:text-gray-500 dark:text-gray-200"
            >
              <span class="sr-only">GitHub</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/christopher-wray/"
              target="_blank"
              rel="noopener"
              class="text-gray-400 dark:text-gray-100 hover:text-gray-500 dark:text-gray-200 ml-3"
            >
              <span class="sr-only">LinkedIn</span>
              <svg
                fill="currentColor"
                class="h-6 w-6"
                enable-background="new 0 0 100 100"
                viewBox="0 0 100 100"
              >
                <g id="_x31_0.Linkedin">
                  <path
                    d="m90 90v-29.3c0-14.4-3.1-25.4-19.9-25.4-8.1 0-13.5 4.4-15.7 8.6h-.2v-7.3h-15.9v53.4h16.6v-26.5c0-7 1.3-13.7 9.9-13.7 8.5 0 8.6 7.9 8.6 14.1v26h16.6z"
                  />
                  <path d="m11.3 36.6h16.6v53.4h-16.6z" />
                  <path
                    d="m19.6 10c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.7 9.6 9.7 9.6-4.4 9.6-9.7-4.3-9.6-9.6-9.6z"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div class="mt-12 grid lg:grid-cols-2 gap-8 xl:mt-0 lg:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h4
                class="text-sm leading-5 font-semibold tracking-wider text-gray-400 dark:text-gray-100 uppercase"
              >
                Me
              </h4>

              <ul class="mt-4">
                <li>
                  <FooterLink link="/" text="Home" />
                </li>
                <li class="mt-4">
                  <FooterLink link="/projects" text="Projects" />
                </li>

                <li class="mt-4">
                  <a
                    href="/Christopher-Wray-Resume.pdf"
                    target="_blank"
                    class="text-base leading-6 text-gray-500 dark:text-gray-200 hover:text-gray-900"
                  >
                    Resume
                  </a>
                </li>
                <li class="mt-4">
                  <FooterLink link="/contact" text="Contact" />
                </li>
              </ul>
            </div>
            <div class="mt-8 md:mt-0">
              <h4
                class="text-sm leading-5 font-semibold tracking-wider text-gray-400 dark:text-gray-100 uppercase"
              >
                More
              </h4>
              <ul class="mt-4">
                <li class="mt-4">
                  <FooterLink link="/posts" text="Posts" />
                </li>
                <li class="mt-4">
                  <FooterLink link="/technologies" text="Technologies" />
                </li>
                <li class="mt-4">
                  <FooterLink link="/categories" text="Categories" />
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h4
                class="text-sm leading-5 font-semibold tracking-wider text-gray-400 dark:text-gray-100 uppercase"
              >
                Free Hosting
              </h4>
              <ul class="mt-4">
                <li>
                  <a
                    href="https://heroku.com"
                    rel="noopener"
                    target="_blank"
                    class="text-base leading-6 text-gray-500 dark:text-gray-200 hover:text-gray-900"
                  >
                    API-Heroku
                  </a>
                </li>
                <li class="mt-4">
                  <a
                    href="https://www.netlify.com/"
                    rel="noopener"
                    target="_blank"
                    class="text-base leading-6 text-gray-500 dark:text-gray-200 hover:text-gray-900"
                  >
                    Frontend-Netlify
                  </a>
                </li>
                <li class="mt-4">
                  <a
                    href="https://www.mongodb.com/"
                    rel="noopener"
                    target="_blank"
                    class="text-base leading-6 text-gray-500 dark:text-gray-200 hover:text-gray-900"
                  >
                    Database-MongoDB Atlas
                  </a>
                </li>
                <li class="mt-4">
                  <a
                    href="https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/tyjytr506ffjmhjfqfui"
                    rel="noopener"
                    target="_blank"
                    class="text-base leading-6 text-gray-500 dark:text-gray-200 hover:text-gray-900"
                  >
                    Images-Cloudinary
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-8 md:mt-0">
              <h4
                class="text-sm leading-5 font-semibold tracking-wider text-gray-400 dark:text-gray-100 uppercase"
              >
                This Site
              </h4>
              <ul class="mt-4">
                <li>
                  <a
                    href="https://nuxtjs.org/"
                    rel="noopener"
                    target="_blank"
                    class="text-base leading-6 text-gray-500 dark:text-gray-200 hover:text-gray-900"
                  >
                    NuxtJs
                  </a>
                </li>
                <li class="mt-4">
                  <a
                    href="https://vuejs.org/"
                    rel="noopener"
                    target="_blank"
                    class="text-base leading-6 text-gray-500 dark:text-gray-200 hover:text-gray-900"
                  >
                    VueJs
                  </a>
                </li>
                <li class="mt-4">
                  <a
                    href="https://tailwindcss.com/"
                    rel="noopener"
                    target="_blank"
                    class="text-base leading-6 text-gray-500 dark:text-gray-200 hover:text-gray-900"
                  >
                    Tailwind CSS
                  </a>
                </li>
                <li class="mt-4">
                  <a
                    href="https://tailwindui.com/"
                    rel="noopener"
                    target="_blank"
                    class="text-base leading-6 text-gray-500 dark:text-gray-200 hover:text-gray-900"
                  >
                    Tailwind UI
                  </a>
                </li>
                <li class="mt-4">
                  <a
                    href="https://strapi.io/"
                    rel="noopener"
                    target="_blank"
                    class="text-base leading-6 text-gray-500 dark:text-gray-200 hover:text-gray-900"
                  >
                    Strapi CMS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-200 pt-8">
        <p class="text-base leading-6 text-gray-400 dark:text-gray-100 xl:text-center">
          &copy; 2020 Chris Wray. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>

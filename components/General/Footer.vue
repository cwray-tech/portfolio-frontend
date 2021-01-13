<template>
  <div class="bg-white dark:bg-gray-900  py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div class="lg:max-w-7xl w-full mx-auto">
      <div class="lg:grid lg:grid-cols-3 lg:gap-20">
        <div class="lg:col-span-1">
          <img class="h-10" src="/web-programming-gray.svg" alt="Chris Wray website logo" />

          <p class="mt-8 text-gray-500 dark:text-gray-200 text-base leading-6">
            Trying to do my part in making the world a better place.
          </p>
          <p class="mt-3 text-gray-500 dark:text-gray-200 text-base leading-6">
            This site is hosted for free, so I am thanking the services I am using by adding a link
            to their websites here in the footer.
          </p>
          <DarkModeSwitcher />
          <div class="mt-8 flex">
            <a
              href="https://stackshare.io/cwray-tech"
              target="_blank"
              rel="noopener"
              class="text-black dark:bg-gray-200 dark:rounded hover:text-gray-500 dark:text-gray-200"
            >
              <span class="sr-only">DEV Profile</span>
              <svg
                role="img"
                class="h-6 w-6 rounded"
                aria-label="StackShare"
                viewBox="0 0 124 124"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"
              >
                <title>StackShare</title>

                <g>
                  <path
                    d="M101.98,83c-3.9,0 -7.157,2.792 -7.886,6.482c-0.212,1.564 0,3.123 0,3.123c0.73,3.687 3.986,6.477 7.885,6.477c4.434,0 8.042,-3.605 8.042,-8.04c0,-4.434 -3.608,-8.042 -8.042,-8.042m-69.938,-29c-4.434,0 -8.041,3.606 -8.041,8.041c0,4.433 3.607,8.041 8.041,8.041c4.435,0 8.042,-3.608 8.042,-8.041c0,-4.435 -3.607,-8.041 -8.042,-8.041m69.924,-12.918c4.435,0 8.042,-3.608 8.042,-8.041c0,-4.435 -3.607,-8.041 -8.042,-8.041c-3.898,0 -7.155,2.791 -7.885,6.48l0,0.049c0,0 -0.18,1.654 0,3.073c0.73,3.689 3.987,6.48 7.885,6.48"
                    style="fill:currentColor"
                  ></path>
                  <path
                    d="M101.965,105.961c-6.965,0 -12.841,-4.655 -14.692,-11.022l-13.897,0l-0.076,0.043l-16.575,-28.517l-10.133,0c-1.852,6.367 -7.727,11.023 -14.694,11.023c-8.451,0 -15.303,-6.852 -15.303,-15.303c0,-8.452 6.852,-15.305 15.303,-15.305c6.967,0 12.842,4.656 14.694,11.025l9.905,0l0.128,-0.217l16.675,-28.689l0.141,0.083l13.768,0c1.852,-6.369 7.727,-11.025 14.692,-11.025c8.453,0 15.305,6.853 15.305,15.305c0,8.451 -6.852,15.304 -15.305,15.304c-6.965,0 -12.84,-4.656 -14.692,-11.025l-9.03,0l-14.14,24.326l-0.006,0.023l0.005,0.022l14.162,24.366l9.073,0c1.851,-6.369 7.727,-11.026 14.692,-11.026c8.453,0 15.305,6.853 15.305,15.305c0,8.452 -6.852,15.304 -15.305,15.304Zm23.031,-105.961l-116.992,0c-4.42,0 -8.004,3.561 -8.004,7.953l0,108.094c0,4.393 3.584,7.953 8.004,7.953l116.992,0c4.421,0 8.004,-3.56 8.004,-7.953l0,-108.094c0,-4.392 -3.583,-7.953 -8.004,-7.953Z"
                    style="fill:currentColor;"
                  ></path>
                </g>
              </svg>
            </a>
            <a
              href="https://dev.to/cwraytech"
              target="_blank"
              rel="noopener"
              class="text-black dark:bg-gray-200 dark:rounded hover:text-gray-500 dark:text-gray-200 ml-3"
            >
              <span class="sr-only">DEV Profile</span>
              <svg
                fill="currentColor"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 448 512"
              >
                <script
                  id="krispX"
                  type="text/javascript"
                  async="true"
                  src="chrome-extension://edmmlbmgelmbipapbhcncjblhejknomb/static/js/patch.js"
                  model8="chrome-extension://edmmlbmgelmbipapbhcncjblhejknomb/models/small_8k.thw"
                  model16="chrome-extension://edmmlbmgelmbipapbhcncjblhejknomb/models/small_16k.thw"
                  workletURL="chrome-extension://edmmlbmgelmbipapbhcncjblhejknomb/wasm/krisp-processor.js"
                />
                <path
                  fill="#000000"
                  d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"
                />
              </svg>
            </a>

            <a
              href="https://github.com/cwray-tech"
              target="_blank"
              rel="noopener"
              class="text-black dark:text-gray-100 hover:text-gray-500 ml-3"
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
              class="text-black dark:text-gray-100 hover:text-gray-500 ml-3"
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
          <div class="grid grid-cols-2 gap-8">
            <div class="mt-8 md:mt-0">
              <h4
                class="text-sm leading-5 font-semibold tracking-wider text-gray-400 dark:text-gray-100 uppercase"
              >
                Me
              </h4>

              <ul>
                <li>
                  <FooterLink link="/" text="Home" />
                </li>
                <li>
                  <FooterLink link="/projects" text="Projects" />
                </li>

                <li>
                  <FooterLink link="/resume" text="Resume" />
                </li>
                <li>
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
              <ul>
                <li>
                  <FooterLink link="/posts" text="Posts" />
                </li>
                <li>
                  <FooterLink link="/technologies" text="Technologies" />
                </li>
                <li>
                  <FooterLink link="/categories" text="Categories" />
                </li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-8">
            <div class="mt-8 md:mt-0">
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

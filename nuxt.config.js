import colorModeModule from '@nuxtjs/color-mode'
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  env: {
    contactFormFunctionRoute: process.env.CONTACT_FORM_FUNCTION_API_ROUTE
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Chris Wray | Full Stack Engineer | Dreamer, Father & Husband',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Chris Wray | Full Stack Engineer | Dreamer, Father & Husband'
      },
      { hid: 'description', name: 'description', content: 'Get to know Chris.' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://chriswray.dev/chris-wray-family.jpg'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', href: '/icon.png' }
    ]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: '~/node_modules/highlight.js/styles/base16/solarized-dark', lang: 'css' },
    { src: '@/assets/css/styles.css', lang: 'css' }
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    //This is for generating a preview. Add ?preview=true to url to see updated content from api.
    'plugins/preview.client.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: {
    dirs: [
      '~/components',
      '~/components/Categories',
      '~/components/Contact',
      '~/components/General',
      '~/components/General/navbar',
      '~/components/Letters',
      '~/components/Links',
      '~/components/Posts',
      '~/components/Projects',
      '~/components/Technologies',
      '~/components/Thoughts',
      '~/components/utils'
    ]
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@/modules/sitemapRouteGenerator',
    '@nuxtjs/svg',

    colorModeModule,
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.ANALYTICS_ID
      }
    ]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
    '@nuxtjs/date-fns'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.API_ROUTE,
  },

  // This is for displaying rich text content in the frontend.
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
    use: ['markdown-it-highlightjs']
  },
  sitemap: {
    hostname: 'https://chriswray.dev',
    gzip: true,
    exclude: ['/letters']
  },

  colorMode: {
    classSuffix: ''
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.optimization.splitChunks.maxSize = 200000
      }
    }
  },

  // TailwindUi Configuration
  tailwindcss: {
    exposeConfig: true
  },
  purgeCSS: {
    whitelist: ['dark-mode']
  }
}

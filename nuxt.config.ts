export default defineNuxtConfig({
  app: {
    head: {
      title: 'Sete Três — v15',
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, height=device-height, user-scalable=no, initial-scale=1'
        },
        {
          name: 'format-detection', content: 'telephone=no'
        },
        {
          hid: 'description',
          name: 'description',
          content: '15 years'
        },
        {
          hid: 'og:type', property: 'og:type', content: 'website'
        },
        {
          hid: 'og:title', property: 'og:title', content: 'Sete Três — v15'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '15 years'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://setetres.st/share-v15.png'
        },
        {
          hid: 'og:url', property: 'og:url', content: 'https://setetres.st'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:title', name: 'twitter:title', content: 'Sete Três — v15'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: '15 years'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://setetres.st/share-v15.png'
        },
      ],
      script: [
      ],
      link: [
        { rel: 'icon', href: '/favicon.svg' }
      ],
      style: [
      ],
      noscript: [
        { children: 'Javascript is required' }
      ],
      bodyAttrs: {
        class: 'bg-zinc-900 font-sans pattern select-none'
      }
    }
  },
  css: [
    '~/assets/css/application.scss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})

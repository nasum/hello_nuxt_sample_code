const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'sample_project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    analyze: false,
    babel: {
      "plugins": ["transform-vue-jsx"]
    },
    cssSourceMap: false,
    devMiddleware: {
      "headers": { "X-Custom-Header": "yes" }
    },
    /*
    ** Run ESLint on save
    */
    extend(config, options) {
      console.log('options', options)
      if (options.isClient) {
        // console.log(config)
      }

      if (options.isDev && options.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.module.rules.push({
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
        ]
      })
    },
    extractCSS: true,
    plugins: [
      new Dotenv()
    ],
    ssr: true,
    templates: [
      {
        src: path.resolve(__dirname, 'views/sample.html'),
        dst: 'views/sample.html',
        options: {
          sample: 'sample text'
        }
      }
    ],
    vendor: ['axios'],
    watch: [
      path.resolve(__dirname, '.env'),
    ]
  },
  css: [
    'normalize.css',
  ],
  generate: {
    routes: [
      '/articles/1',
      '/articles/2',
      '/articles/3'
    ]
  },
  loading: '~/components/Loading.vue',
  router: {
    base: '/app/',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    },
    linkActiveClass: 'my-active-class',
    linkExactActiveClass: 'my-exact-active-class',
    scrollBehavior: function (to, from, savedPosition) {
      return {
        selector: '.scroll',
        offset: {
          x: 0,
          y: 1000
        }
      }
    }
  }
}
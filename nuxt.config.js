require('dotenv').config();
const pkg = require('./package');
const nodeExternals = require('webpack-node-externals');

const productTitle = process.env.PRODUCT === "4NET"
  ? `Shop Mobile - C1702L`
  : `Shop Mobile - C1702L`;

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: productTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,700'},
      { rel: 'stylesheet', href: 'css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'css/font-awesome.min.css' },
      { rel: 'stylesheet', href: 'css/nouislider.min.css' },
      { rel: 'stylesheet', href: 'css/slick.css' },
      { rel: 'stylesheet', href: 'css/slick-theme.css' },
      { rel: 'stylesheet', href: 'css/style.css' },
    ],
    script: [
      { src: 'https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js'},
      { src: 'https://oss.maxcdn.com/respond/1.4.2/respond.min.js'},
    ]
},

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#41B9FF' },

  // router: {
  //   scrollBehavior (to, from, savedPosition) {
  //     return { x: 0, y: 0 }
  //   },
  //   middleware: [],
  // },

  /*
  ** Global CSS
  */
  css: [
    `~assets/less/${process.env.THEME}-style.less`
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-echarts', ssr: false },
    { src: '~/plugins/iview', ssr: false },
    { src: '~/plugins/i18n', ssr: false },
    { src: '~/plugins/directive', ssr: false },
    { src: '~/plugins/v-click-outside', ssr: false },
    { src: '~/plugins/vue-infinite-scroll', ssr: false },
    {src: '~/plugins/vue-perfect-scrollbar.js', ssr: true},
    { src: '~/plugins/v-tippy', ssr: false },
    { src: '~/plugins/vue-slider', ssr: false },
    { src: '~/plugins/v-clipboard', ssr: false },
    { src: '~/plugins/filter', ssr: false },
    { src: '~/plugins/moment', ssr: false },
    { src: '~/plugins/events-bus' },
    { src: '~/plugins/axios' },
    { src: '~/plugins/client-api' },
    { src: '~/plugins/app-config' },
    { src: '~/plugins/jquery.min.js', ssr: false},
    { src: '~/plugins/jquery.zoom.min.js', ssr: false},
    { src: '~/plugins/bootstrap.min.js', ssr: false},
    { src: '~/plugins/slick.min.js', ssr: false},
    { src: '~/plugins/nouislider.min.js', ssr: false},
    { src: '~/plugins/main.js', ssr: false},
  ],

  generate: {
    routes: ['/', '/about', '/vi', '/vi/about']
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['@nuxtjs/dotenv'],
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.NUXT_ENDPOINT
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vue-echarts', 'resize-detector'],
    loaders: {
      less: { javascriptEnabled: true }
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: 'vue-loader!vue-md-loader'
        }
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
};

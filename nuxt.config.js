
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/png', sizes:'57x57', href: '/favicon/apple-icon-57x57.png' }
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/png', sizes:'60x60', href: '/favicon/apple-icon-60x60.png' }
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/png', sizes:'72x72', href: '/favicon/apple-icon-72x72.png' }
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/png', sizes:'76x76', href: '/favicon/apple-icon-76x76.png' }
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/png', sizes:'114x114', href: '/favicon/apple-icon-114x114.png' }
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/png', sizes:'120x120', href: '/favicon/apple-icon-120x120.png' }
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/png', sizes:'144x144', href: '/favicon/apple-icon-144x144.png' }
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/png', sizes:'152x152', href: '/favicon/apple-icon-152x152.png' }
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/png', sizes:'180x180', href: '/favicon/apple-icon-180x180.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes:'192x192', href: '/favicon/android-icon-192x192.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes:'32x32', href: '/favicon/favicon-32x32.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes:'96x96', href: '/favicon/favicon-96x96.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes:'16x16', href: '/favicon/favicon-16x16.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
 css: [
  '@/assets/scss/main.scss'
],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   extend(config, ctx) {
    if(ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre', 
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          fix: true
        }
      })
    }// eslint fix rules
  }
  }
}

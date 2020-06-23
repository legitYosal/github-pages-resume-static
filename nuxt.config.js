
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || 'یوسف سلملیان',
    title: 'یوسف سلملیان',
    script: [
        { src: "https://www.googletagmanager.com/gtag/js?id=G-EGFW7EJ9BC", async:true }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || 'برنامه نویس ،طراحی سایت، به صورت داینامیک و کاملا اختصاصی و وب سایت های پورتفولیو و استاتیک، طراحی ربات تلگرامی، انجام پروژه های برنامه نویسی' }
      // { hid: 'description', name: 'description', content: 'برنامه نویس ،طراحی سایت، به صورت داینامیک و کاملا اختصاصی و وب سایت های پورتفولیو و استاتیک، طراحی ربات تلگرامی، انجام پروژه های برنامه نویسی' }
      { hid: 'description', name: 'description', content: 'وب سایت شخصی من، برنامه نویسی و طراحی وب سایت به صورت ریسپانسیو، سایت های استاتیک و داینامیک به صورت اختصاصی، انجام پروژه ربات های تلگرامی' },
      { hid: 'keywords', name: 'keywords', content: 'یوسف سلملیان, yosef salmalian, سلملیان, salmalian, portfolio, پورتفولیو, resume, رزومه, ویو جی اس, vue.js, شخصی, وب سایت شخصی'},
      { hid: 'author', name: 'author', content: 'yosef salmalian'},
      { hid: 'google-site-verification', name:'google-site-verification', content: 'GAMMYiNEg2SPU_RgpZjBbHcfR9TwmSMt7_oMlJpMJKM'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
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
    '~/assets/styles.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/localStorage.js', ssr: false },
    { src: '~/plugins/vue-awesome.js', ssr: false},
    { src: '~/plugins/vue-fontawesome.js', ssr: false},
    { src: '~/plugins/vue-ellipse-progress', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-awesome'],
    extend (config, ctx) {
    }
  }
}

module.exports = {
  target: 'static',
  components: true,
  server: {
    port: 3020,
  },
  head: {
    title: '📺 Full Static mode'
  },
  modules: [
    '@nuxt/http',
  ],
}

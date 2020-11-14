module.exports = {
  target: 'server',
  components: true,
  server: {
    port: 3010,
  },
  head: {
    title: '📺 Universal mode'
  },
  modules: [
    '@nuxt/http',
  ],
}

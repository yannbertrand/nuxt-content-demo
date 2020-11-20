module.exports = {
  ssr: false,
  target: 'static',
  components: true,
  head: {
    title: '📺 SPA mode'
  },
  modules: [
    '@nuxt/http',
  ],
  loadingIndicator: {
    name: 'nuxt',
  },
}

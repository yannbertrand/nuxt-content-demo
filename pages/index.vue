<template>
  <main>
    <h1>Mes séries</h1>

    <div id="loader" v-if="$fetchState.pending">
      <img src="/loader.svg" width="100" height="100">
      <h2>Chargement de la liste en cours...</h2>
    </div>

    <div id="page" v-else>
      <label>
        Chercher une série
        <input id="search" v-model="query" @keypress.enter="search()" placeholder="Game of Thrones..." />
      </label>

      <section id="shows">
        <article v-for="show in filteredShows" :key="show.slug">
          <nuxt-link
            :to="{ name: 'slug', params: { slug: show.slug } }"
          >
            <h2>{{ show.title }}</h2>
            <img :src="show.images.poster" width="270" height="397" alt="" />
          </nuxt-link>
          <div class="genres">
            <Genre v-for="genre in show.genres" :key="genre" :name="genre" />
          </div>
        </article>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      shows: [],
      filteredShows: [],
      query: '',
    }
  },
  async fetch() {
    this.shows = await fetch('https://mock-tv-shows-api.netlify.app/shows.json').then(res => res.json())
    this.filteredShows = this.shows
  },
  // fetchDelay: 5000,
  methods: {
    search() {
      this.filteredShows = this.shows.filter(show => show.title.toUpperCase().includes(this.query.toUpperCase()))
    }
  }
}
</script>

<style>
#loader {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}
#loader img {
  width: 100px;
  background: #ffffff;
}
#loader h2 {
  font-size: 1.5rem;
}
#shows {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
label {
  margin: 0rem 2rem 2rem 2rem;
  font-size: 1.5rem;
}
input {
  font-size: 1.5rem;
  padding: 0.5rem;
}
article {
  background-color: rgb(248,250,252);
  max-width: 270px;
  margin: 1rem;
  text-align: center;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  box-shadow: 0 0 8px rgba(0,0,0,.101562);
  padding: 0.4rem 0;
  height: 100%;
}
article a {
  text-decoration: none;
}
article h2 {
  margin: 0;
}
article img {
  margin: 0.3rem 0;
  background: #ddd;
  max-width: 270px;
  height: auto;
}
article .genres {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 0.9rem;
}
</style>

<template>
  <main>
    <h1>Mes séries</h1>

    <div v-if="$fetchState.pending">
      Chargement de la liste en cours...
    </div>
    <div id="shows" v-else>
      <article v-for="show in shows" :key="show.slug">
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
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      shows: []
    }
  },
  async fetch() {
    this.shows = await fetch('https://mock-tv-shows-api.netlify.app/shows.json').then(res => res.json())
  }
}
</script>

<style>
label {
  margin: 0rem 2rem 2rem 2rem;
  font-size: 1.5rem;
}
input {
  font-size: 1.5rem;
  padding: 0.5rem;
}
#shows {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

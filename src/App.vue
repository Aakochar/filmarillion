<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import api from './api/movies';

export default {
  methods: {
    async tryGetAllMovies() {
      try {
        const debug = await api.getAllMovies();

        console.log(debug);
      } catch (error) {
        console.error(error);
      }
    },
  },

  async mounted() {
    await this.tryGetAllMovies();
  },
};
</script>

<style>
#app {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: blue;
}
</style>

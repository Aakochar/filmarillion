<template>
  <div class="movies-info">
    <svg
      class="movies-info__chart"
      width="640"
      height="480"
    />
  </div>
</template>

<script>
// import * as d3Force from 'd3-force';
import api from '@api/movies';

export default {
  name: 'MoviesInfo',

  data() {
    return {
      movies: [],
    };
  },

  methods: {
    async tryGetAllMovies() {
      try {
        this.movies = await api.getAllMovies();
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

<style lang="scss">
  .movies-info {
    &__chart {
      border: 1px dashed #9f9f9f;
    }
  }
</style>

<template lang="pug">
  .movies-info
    template(v-if="presenter.isEmpty")
      h3 Loading...
    template(v-else)
      graph.movies-info__chart(
        :size="presenter.size"
        :nodes="presenter.nodes"
        :mode="presenter.mode"
        @node:click="onNodeClick"
      )
</template>

<script>
import api from '@api/movies';
import Graph from '@components/graph';
import Presenter, { DECADES as MODE } from './services/Presenter';

const RENDERER_WIDTH = 800;
const RENDERER_HEIGHT = 500;

export default {
  presenter: new Presenter(),

  name: 'MoviesInfo',

  components: {
    Graph,
  },

  data() {
    return {
      movies: [],
      mode: MODE.all,
    };
  },

  computed: {
    presenter() {
      return this.$options.presenter.create(this.movies, this.mode, RENDERER_WIDTH, RENDERER_HEIGHT);
    },
  },

  methods: {
    async tryGetAllMovies() {
      this.movies = await api.getAllMovies();
    },

    onNodeClick(node) {
      this.switchMode(node);
    },

    switchMode(node) {
      if (this.mode === MODE.all) {
        this.mode = node.decade;
      } else {
        this.mode = MODE.all;
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

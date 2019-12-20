<template lang="pug">
  svg.renderer(
    ref="svg"
    :width="presenter.width"
    :height="presenter.height"
  )
    g.renderer__nodes
      template(v-for="node in presenter.nodes")
        g
          circle(
            :key="node.innerId"
            :r="node.r"
            :color="node.color"
            fill="currentColor"
            @click.stop='onNodeClick(node)'
            :cx="node.x"
            :cy="node.y"
            :title="node.name"
            v-bind='node.attrs'
          )
          text.renderer__label(
            style="fill:wheat;"
            x="50%"
            y="50%"
            text-anchor="middle"
          ) {{ node.label }}
</template>

<script>
import Presenter from './services/Presenter';
import * as forceSimulation from 'd3-force';

const d3 = Object.assign({}, forceSimulation);

export default {
  presenter: new Presenter(),

  name: 'Renderer',

  props: {
    size: {
      type: Object,
      required: true,
    },

    nodes: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      simulation: undefined,
    };
  },

  computed: {
    /**
     * @returns {object}
     */
    presenter() {
      return this.$options.presenter.create(this.nodes, this.size);
    },

    center() {
      return {
        x: this.size.width / 2,
        y: this.size.height / 2,
      }
    },
  },

  created() {
    this.buildNodes();
  },

  mounted() {
    this.animate();
  },

  methods: {
    onNodeClick(node) {
      this.$emit('node:click', node);
    },

    simulate() {
      this.simulation = d3.forceSimulation(this.nodes)
        .force('charge', d3.forceManyBody().strength(() => 20))
        .force('x', d3.forceX())
        .force('y', d3.forceY())
        .force('center', d3.forceCenter(this.center.x, this.center.y));
    },

    animate () {
      if (this.simulation) {
        this.simulation.stop();
      } else { 
        this.simulate();
      }

      this.simulation.restart()
    },

    buildNodes() {
      this.nodes.forEach((node, index) => {
        if (!node.id && node.id !== 0) { 
          this.$set(node, 'id', index);
        }

        if (!node.x) {
          this.$set(node, 'x', this.center.x);
        }

        if (!node.y) {
          this.$set(node, 'y', this.center.y);
        }

        if (!node.name && node.name !== '0') {
          this.$set(node, 'name', `node ${node.id}`);
        }
      })
    },
  },
};
</script>

<style lang="scss">
</style>

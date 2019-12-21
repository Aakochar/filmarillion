<template lang="pug">
  svg.renderer(
    ref="svg"
    :width="presenter.width"
    :height="presenter.height"
  )
    g.renderer__nodes
      template(v-for="node in d3Nodes")
        g(@click.stop='onNodeClick(node)')
          circle(
            :key="node.innerId"
            :r="node.r"
            :color="node.color"
            fill="currentColor"
            :cx="node.x"
            :cy="node.y"
            :title="node.name"
            color="#A9D8B8"
            v-bind='node.attrs'
          )
          text.renderer__label(
            text-anchor="middle"
            :x="node.x"
            :y="node.y"
          ) {{ node.label }}
</template>

<script>
import * as forceSimulation from 'd3-force';

const d3 = Object.assign({}, forceSimulation);

export default {
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

    mode: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      simulation: undefined,
      // adding d3 nodes in presenter breaks reactivity
      // should consider better solution
      d3Nodes: undefined,
    };
  },

  computed: {
    /**
     * @returns {object}
     */
    presenter() {
      return {
        width: this.size.width,
        height: this.size.height,
      };
    },

    center() {
      return {
        x: this.size.width / 2,
        y: this.size.height / 2,
      };
    },
  },

  watch: {
    mode() {
      this.setD3Nodes();
    },
  },

  created() {
    this.setD3Nodes();
  },

  mounted() {
    this.animate();
  },

  methods: {
    onNodeClick(node) {
      this.$emit('node:click', node);
    },

    simulate() {
      this.simulation = d3
        .forceSimulation(this.d3Nodes)
        .force('charge', d3.forceManyBody().strength(-50))
        .force('collide', d3.forceCollide().radius(node => node.r + 4))
        .force('x', d3.forceX(this.center.x).strength(0.3))
        .force('y', d3.forceY(this.center.y).strength(0.5));
    },

    animate() {
      if (this.simulation) {
        this.simulation.stop();
      } else {
        this.simulate();
      }

      this.simulation.restart();
    },

    setD3Nodes() {
      this.d3Nodes = [...this.nodes];
      this.d3Nodes.forEach((node, index) => {
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
      });

      if (this.simulation) {
        this.simulation.nodes(this.d3Nodes).alpha(0.5);

        this.simulation.restart();
      }
    },
  },
};
</script>

<style lang="scss">
.renderer {
  &__label {
    cursor: default;
    fill: #72705b;
    font-size: 14px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
}
</style>

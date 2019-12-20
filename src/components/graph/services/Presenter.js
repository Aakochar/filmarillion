const RADIUS_DIVIDER = 2;
const MULTIPLIER = 5;
const NODE_DEFAULT_SIZE = 10;

const HEX_BASE = 16;
const HEX_WHITE = 0xffffff;

export default class Presenter {
  /**
   * @param {object[]} nodes
   * @param {number} width
   * @param {number} height
   * @throws {TypeError}
   */
  create(nodes, { width, height }) {
    return {
      width,
      height,
      nodes: nodes.map(node => this._createNode(node)),
    }
  }

  /**
   * @param {object} node
   * @private
   */
  _createNode(node) {
    const radius = (this._getNodeSize(node) / RADIUS_DIVIDER);

    return {
      r: radius,
      color: this._getRandomHexColor(),
      width: this._getNodeSize(node),
      height: this._getNodeSize(node),
      ...node,
    }
  }

  /**
   * @param {object} node
   * @private
   */
  _getNodeSize(node) {
    return (node.size || NODE_DEFAULT_SIZE) * MULTIPLIER;
  }

  /**
 * @returns {string}
 */
  _getRandomHexColor() {
    const color = Math.floor((Math.random() * HEX_WHITE)).toString(HEX_BASE);
    return `#${color}`;
  }
}

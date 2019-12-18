import axios from 'axios';

export default class CrudAgent {
  /**
   * @param {object} params 
   */
  constructor(params) {
    this.axios = axios.create(params);
  }

  /**
   * @param {string} url
   * @param {object} data
   * @param {object} [config]
   */
  async create(url, data, config) {
    await this.axios.post(url, data, config);
  }

  /**
   * @param {string} url
   * @param {object} [config]
   */
  async read(url, config) {
    const response = await this.axios.get(url, config);

    return response;
  }

  /**
   * @param {string} url
   * @param {object} data
   * @param {object} config
   */
  async update(url, data, config) {
    await this.axios.put(url, data, config);
  }

  /**
   * @param {string} url
   * @param {object} config
   */
  async delete(url, config) {
    await this.axios.delete(url, config);
  }
}

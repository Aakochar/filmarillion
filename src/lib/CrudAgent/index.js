import CrudAgent from './CrudAgent';

// since now all api is mocked, no need in such agent for now
// it is here to keep project structured
const agent = new CrudAgent({
  baseURL: '',
});

export default (api) => Object.assign(api, { agent });

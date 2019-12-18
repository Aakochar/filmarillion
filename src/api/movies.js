import createApi from '../lib/CrudAgent';
import mockMovieList from './top250.json';

export default createApi({
  getAllMovies() {
    return Promise.resolve(mockMovieList);
  },
});

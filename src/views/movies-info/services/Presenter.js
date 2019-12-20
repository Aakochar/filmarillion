import { isArray, isObject, isNumber } from 'lodash';

export const DECADES = {
  all: 'all',
  yy20s: '1920s',
  yy30s: '1930s',
  yy40s: '1940s',
  yy50s: '1950s',
  yy60s: '1960s',
  yy70s: '1970s',
  yy80s: '1980s',
  yy90s: '1990s',
  yy00s: '2000s',
  yy10s: '2010s',
}

const DECADE_YEARS_MAP = {
  [DECADES.yy20s]: { from: 1920, to: 1929 },
  [DECADES.yy30s]: { from: 1930, to: 1939 },
  [DECADES.yy40s]: { from: 1940, to: 1949 },
  [DECADES.yy50s]: { from: 1950, to: 1959 },
  [DECADES.yy60s]: { from: 1960, to: 1969 },
  [DECADES.yy70s]: { from: 1970, to: 1979 },
  [DECADES.yy80s]: { from: 1980, to: 1989 },
  [DECADES.yy90s]: { from: 1990, to: 1999 },
  [DECADES.yy00s]: { from: 2000, to: 2009 },
  [DECADES.yy10s]: { from: 2010, to: 2019 },
};

export default class Presenter {
  create(movies, decade, width, height) {
    if (!isArray(movies)) {
      throw new TypeError('movies should be an array');
    }

    if (movies.some(item => !isObject(item))) {
      throw new TypeError('each movie should be an object');
    }

    if (!Object.values(DECADES).includes(decade)) {
      throw new TypeError('decade should has correct value');
    }

    if (!isNumber(width)) {
      throw new TypeError('width should be a number');
    }

    if (!isNumber(height)) {
      throw new TypeError('height should be a number');
    }

    return {
      size: {
        width,
        height,
      },
      nodes: this._createNodesByMode(movies, decade),
      isEmpty: !movies.length,
    };
  }

  /**
   * @param {object[]} movies 
   * @param {string} decade 
   */
  _createNodesByMode(movies, decade) {
    let result;

    if (decade === DECADES.all) {
      result = this._createDecadeNodes(movies);
    } else {
      result = this._createMovieNodes(movies, decade);
    }

    return result;
  }

  /**
   * @param {object[]} movies 
   * @param {string} decade 
   */
  _createMovieNodes(movie, decade) {
    const filteredMovies = this._filterMoviesByDecade(movie, decade)

    return filteredMovies.map(item => ({
      label: item.Title,
      year: item.Year,
    }));
  }

  /**
   * @param {object[]} movies 
   * @param {string} decade
   * @param {{ from: number, to: number }} [interval]
   */
  _filterMoviesByDecade(movies, decade, interval) {
    let result;

    if (!interval) {
      result = movies;
    } else {
      result = movies.filter(({ Year: movieYear }) => {
        return movieYear >= interval.from && movieYear <= interval.to;
      });
    }

    return result;
  }

  /**
   * @param {object[]} movies 
   */
  _createDecadeNodes(movies) {
    const result = [];

    for (const [decade, interval] of Object.entries(DECADE_YEARS_MAP)) {
      const decadeMovies = this._filterMoviesByDecade(movies, decade, interval);

      result.push({
        decade,
        label: decade,
        size: decadeMovies.length,
      })
    }

    return result;
  }
}

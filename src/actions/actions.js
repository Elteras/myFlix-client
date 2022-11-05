export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';
export const SET_SELECTEDMOVIE = 'SET_SELECTEDMOVIE'

export function setMovies(value) {
  return { type: SET_MOVIES, value };
}

export function setFilter(value) {
  return { type: SET_FILTER, value };
}

export function setSelectedMovie(value) {
  return { type: SET_SELECTEDMOVIE, value };
}
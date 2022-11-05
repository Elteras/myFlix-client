import { combineReducers } from 'redux';

import { SET_FILTER, SET_MOVIES, SET_SELECTEDMOVIE } from '../actions/actions';

function visibilityFilter(state = '', action) {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
}

function movies(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.value;
    default:
      return state;
  }
}

function setSelectedMovieTest(state = null, action) {
  switch (action.type) {
    case SET_SELECTEDMOVIE:
      return action.value;
    default:
      return state;
  }
}

// function moviesApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     movies: movies(state.movies, action)
//   }
// }

const moviesApp = combineReducers({
  setSelectedMovieTest,
  visibilityFilter,
  movies
});



export default moviesApp;
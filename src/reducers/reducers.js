import { combineReducers } from 'redux';

import { SET_FILTER, SET_MOVIES, SET_USER } from '../actions/actions';

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

function user(
  state = {
    Username: '',
    Email: '',
    Password: '',
    Birthday: '',
    FavMovies: [],
  },
  action
) {
  const { value } = action;
  switch (action.type) {
    case SET_USER:
      return value;
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
  user,
  visibilityFilter,
  movies
});



export default moviesApp;
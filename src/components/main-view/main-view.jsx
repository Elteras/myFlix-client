import React from 'react';
import axios from 'axios';

import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null
    };
  }


  componentDidMount() {
    axios.get('https://elt-myflix.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    //
  }


  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  onLoggedIn(user) {
    this.setState({
      user
    });
  }

  render() {
    const { movies, selectedMovie, user } = this.state;


    /* If there's no user, LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

    if (movies.length === 0) return <div className="main-view"></div>;

    return (
      <div className="main-view">
        {selectedMovie            //here using ternary operator
          ? <MovieView movieData={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
          : movies.map(movie => (
            <MovieCard key={movie._id} movieData={movie} onMovieClick={movie => { this.setSelectedMovie(movie) }} />
          ))
        }
      </div>
    );
  }
}






// { _id: 1, Title: 'Inception', Description: 'desc1...', ImagePath: 'https://picsum.photos/seed/1/200/300' },
// { _id: 2, Title: 'The Shawshank Redemption', Description: 'desc2...', ImagePath: 'https://picsum.photos/seed/2/200/300' },
// { _id: 3, Title: 'Gladiator', Description: 'desc3...', ImagePath: 'https://picsum.photos/seed/3/200/300' }
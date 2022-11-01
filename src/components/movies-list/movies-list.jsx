import React from 'react';
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};


function MoviesList(props) {
  const { movies, selectedMovie, setSelectedMovie, visibilityFilter } = props;
  let filteredMovies = movies;

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter(m => m.Title.toLowerCase().includes(visibilityFilter.toLowerCase()));
  }

  if (!movies) return <div className="main-view" />;

  return <>
    {filteredMovies.map(m => (
      <Col md={3} key={m._id}>
        <MovieCard movieData={m} onMovieClick={movie => { this.setSelectedMovie(movie) }} />
      </Col>
    ))};
    <MovieView
      movieData={selectedMovie}
      setUser={(user) => { this.setUser(user) }}
      onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
  </>
}





export default connect(mapStateToProps)(MoviesList);

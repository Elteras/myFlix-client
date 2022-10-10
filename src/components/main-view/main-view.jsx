import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route } from "react-router-dom";

import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

import './main-view.scss';

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
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }

  componentWillUnmount() {
    //
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }


  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  getMovies(token) {
    axios.get('https://elt-myflix.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        //Assign result to the state
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { movies, selectedMovie, user } = this.state;

    /* If there's no user, LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
    if (!user) return (
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
        </Col>
      </Row>
    );

    if (movies.length === 0) return <div className="main-view"></div>;
    return (
      <Router>
        <Row className="main-view justify-content-md-center">
          <Route exact path="/" render={() => {

            {
              return movies.map(m => (
                <Col className="movie-card-col" md={3} key={m._id}>
                  <MovieCard movieData={m} onMovieClick={movie => { this.setSelectedMovie(movie) }} />
                </Col>
              ))
            }
          }} />

          <MovieView movieData={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />

          <Container>
            <Row>
              <Col className="text-center">
                <Button className="logoutButton" variant="success" onClick={() => { this.onLoggedOut() }}>Log out</Button>
              </Col>
            </Row>
          </Container>
        </Row>
      </Router>
    );
  }








}


import React from 'react';
import axios from 'axios';


//3.8 react-redux stuff
import { connect } from 'react-redux';
import { setMovies } from '../../actions/actions'
import { setSelectedMovie } from '../../actions/actions'
import MoviesList from '../movies-list/movies-list'
//---------------

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';
import { DirectorView } from '../director-view/director-view';
import { GenreView } from '../genre-view/genre-view';
import { UserView } from '../user-view/user-view';
import { Menubar } from '../navbar/navbar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'

import './main-view.scss';

//export keyword removed (3.8)
class MainView extends React.Component {

  constructor() {
    super();
    this.state = {
      selectedMovie: null,
      user: JSON.parse(localStorage.getItem('user'))
    };
  }


  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.getMovies(accessToken);
    }
  }

  componentWillUnmount() {
    //
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', JSON.stringify(authData.user));
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }


  setSelectedMovie = (newSelectedMovie) => {
    console.log(selectedMovie)
    console.log(newSelectedMovie)
    this.setState({
      selectedMovie: newSelectedMovie
    });
    console.log(selectedMovie)
  }

  setUser(user) {
    this.setState({ user: user });
    localStorage.setItem('user', JSON.stringify(user))
  }


  //changed for 3.8. might need to check and change some other things to match. 
  getMovies(token) {
    axios.get('https://elt-myflix.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        this.props.setMovies(response.data); // this is the changed line. 
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  render() {
    const { selectedMovie, user } = this.state;
    const { movies } = this.props;

    return (
      <>

        <Router>
          <Menubar user={user} />

          <Row className="main-view">
            <Route exact path="/" render={() => {

              if (!user) return (
                <Col className="login-view-col" md={{ span: 6, offset: 3 }}>
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
              );

              if (movies.length === 0) return <div className="main-view"></div>;

              return <MoviesList movies={movies} setSelectedMovie={this.setSelectedMovie} />    // new line

              // {
              //   return <>
              //     {movies.map(m => (
              //       <Col className="movie-card-col" md={3} key={m._id}>
              //         <MovieCard
              //           movieData={m}
              //           onMovieClick={movie => { this.setSelectedMovie(movie) }} />
              //       </Col>
              //     ))}
              //     <MovieView
              //       movieData={selectedMovie}
              //       setUser={(user) => { this.setUser(user) }}
              //       onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
              //   </>
              // }
            }} />


            <Route path="/register" render={() => {
              if (user) <Redirect to="/" />
              return <Col>
                <RegistrationView />
              </Col>
            }} />


            {/* For each of these paths will need the statement to check if theres a user, and render loginview if there isnt */}


            <Route path="/profile/:user" render={({ history }) => {

              if (!user) return (
                <Col className="login-view-col" md={{ span: 6, offset: 3 }}>
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
              );

              if (movies.length === 0) return <div>Loading...</div>

              return <Col md={8}>
                <UserView
                  user={user}
                  movies={movies}
                  setUser={(user) => { this.setUser(user) }}
                  onBackClick={() => history.goBack()} />
              </Col>
            }} />


            <Route path="/directors/:name" render={({ match, history }) => {

              if (!user) return (
                <Col className="login-view-col" md={{ span: 6, offset: 3 }}>
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
              );

              if (movies.length === 0) return <div>Loading...</div>

              return <Col md={8}>
                <DirectorView
                  director={movies.find(m => m.Director.Name === match.params.name).Director}
                  onBackClick={() => history.goBack()}
                  moviesDirected={movies.filter(m => m.Director.Name === match.params.name)} />
              </Col>
            }} />



            <Route path="/genres/:name" render={({ match, history }) => {

              if (!user) return (
                <Col className="login-view-col" md={{ span: 6, offset: 3 }}>
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
              );

              if (movies.length === 0) return <div>Loading...</div>

              return <Col md={8}>
                <GenreView
                  genre={movies.find(m => m.Genre.Name === match.params.name).Genre}
                  onBackClick={() => history.goBack()}
                  moviesInGenre={movies.filter(m => m.Genre.Name === match.params.name)} />
              </Col>
            }} />


          </Row>
        </Router >

      </>
    );
  }

}

//exercise told me to put this *above* the yellow bracket just above but that broke the app so idfk.

let mapStateToProps = state => {
  return { movies: state.movies }
}

export default connect(mapStateToProps, { setMovies })(MainView);


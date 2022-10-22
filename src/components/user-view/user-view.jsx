import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Button, Card, Container } from 'react-bootstrap';

import { Link } from "react-router-dom";

import './user-view.scss';


export class UserView extends React.Component {

  constructor() {
    super();
    this.state = {
      Username: null,
      Password: null,
      Email: null,
      Birthday: null,
      FavouriteMovies: [],
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    const username = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    axios.get(`https://elt-myflix.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthday: response.data.Birthday,
          FavouriteMovies: response.data.FavouriteMovies,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };








  render() {
    const { user, movies, onBackClick } = this.props;
    const { FavouriteMovies, Email, Birthday } = this.state;

    const userFaves = FavouriteMovies.map((movieId) =>
      movies.find((movie) => movie._id === movieId)
    );

    return (
      <>
        <div>
          <p>Name: {user.Username}</p>
          <p>Email: {user.Email}</p>
          <p>Birthday: {user.Birthday}</p>
        </div>
        <div>
          <p>Favorite Movies:</p>

          <ul>
            {userFaves.map((fm) => (
              <div>{fm.Title}</div>
            ))}
          </ul>

        </div>
      </>

    )

  }
}

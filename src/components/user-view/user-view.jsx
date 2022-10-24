import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Button, Card, Form, Container } from 'react-bootstrap';

import { Link } from "react-router-dom";

import './user-view.scss';


export class UserView extends React.Component {


  render() {
    const { user, movies, onBackClick } = this.props;

    const userFaves = user.FavoriteMovies?.map((movieId) =>
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
            {userFaves?.map((fm) => (
              <li>{fm.Title}</li>
            ))}
          </ul>

        </div>


      </>

    )

  }
}

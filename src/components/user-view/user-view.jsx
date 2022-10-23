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


        {/* <Card>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
              {usernameErr && <p>{usernameErr}</p>}
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} />
              {nameErr && <p>{nameErr}</p>}
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
              {passwordErr && <p>{passwordErr}</p>}
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="text" value={email} onChange={e => setPassword(e.target.value)} />
              {emailErr && <p>{emailErr}</p>}
            </Form.Group>

            <Button className="registrationButton" variant="success" type="submit" onClick={handleSubmit}>
              Update
            </Button>
          </Form>
        </Card> */}



      </>

    )

  }
}

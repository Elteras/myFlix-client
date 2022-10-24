import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Button, Card, Form, Container } from 'react-bootstrap';

import { Link } from "react-router-dom";

import './user-view.scss';



export function UserView(user, movies, onBackClick) {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const userFaves = user.FavoriteMovies?.map((movieId) =>
    movies.find((movie) => movie._id === movieId)
  );



  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      /* Send a request to the server for authentication */
      axios.post('https://elt-myflix.herokuapp.com/users', {
        Username: username,
        Password: password,
        Email: email
      })
        .then(response => {
          const data = response.data;
          console.log(data);
          alert('Update successful')
          window.open('/', '_self');
        })
        .catch(e => {
          console.error(response);
          alert('Unable to update');
        });
    };
  }

  <Card>
    <h3>Update information</h3>
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formName">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="text" value={email} onChange={e => setPassword(e.target.value)} />
      </Form.Group>

      <Button className="registrationButton" variant="success" type="submit" onClick={handleSubmit}>
        Update
      </Button>
    </Form>
  </Card>



}
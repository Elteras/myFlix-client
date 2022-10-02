import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email);

    /* Send a request to the server for authentication */
    /* then call props.Registration(username) */
    props.onRegistration(username);
  };

  return (

    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Button className="registrationButton" variant="success" type="submit" onClick={handleSubmit}>
        Register
      </Button>
    </Form>
  )


}

//Need to do a registration view thing, not sure if the below is correct. 
RegistrationView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
};
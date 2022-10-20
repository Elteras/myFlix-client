import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Button, Card, Container } from 'react-bootstrap';

import { Link } from "react-router-dom";

import './user-view.scss';


export class UserView extends React.Component {
  render() {
    const { user, onBackClick } = this.props;

    return (
      <div>
        <p>Name: {user}</p>
        <p>Email: {user.Email}</p>
      </div>

    )

  }
}

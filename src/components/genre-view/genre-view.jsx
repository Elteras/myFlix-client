import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Button, Card, Container } from 'react-bootstrap';

import { Link } from "react-router-dom";

import './genre-view.scss';


export class GenreView extends React.Component {
  render() {
    const { genre, onBackClick } = this.props;

    return (
      <div>
        <h3>{genre.Name}</h3>
        <p>Description: {genre.Description}</p>
      </div>

    )

  }
}

// need to show all movies of a certain genre
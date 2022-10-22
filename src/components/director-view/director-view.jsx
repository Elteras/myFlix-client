import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Button, Card, Container } from 'react-bootstrap';

import { Link } from "react-router-dom";

import './director-view.scss';


export class DirectorView extends React.Component {
  render() {
    const { director, onBackClick, moviesDirected } = this.props;

    console.log(moviesDirected)

    return (
      <div>
        <h3>{director.Name}</h3>
        <p>Born: {director.Birth}</p>
        <p>Biography: {director.Bio}</p>

        <p>Movies directed by {director.Name}:</p>

        <ul>
          {moviesDirected?.map(m => (
            <div>{m.Title}</div>
          ))}
        </ul>


      </div>

    )

  }
}

// need code to show all movies with that director
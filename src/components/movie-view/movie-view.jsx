import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './movie-view.scss';

export class MovieView extends React.Component {


  render() {
    const { movieData, onBackClick } = this.props;


    //----- everything below this line is the new modal stuff that i might just completely scrap

    if (!movieData) return <></>;


    return (                    //Unsure of a lot of the formatting, forgotten some of the HTML basics. Will work on it. 
      <Modal show={movieData} onHide={() => { onBackClick(null) }}>

        <Modal.Header>
          <Modal.Title>{movieData.Title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{movieData.Description}</p>
          <div>{movieData.Director.Name}</div>
          <div>{movieData.Genre.Name}</div>
          <div><img src={movieData.ImagePath} /></div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={() => { onBackClick(null); }}>Back</Button>
        </Modal.Footer>

      </Modal>
    )

  }
}



MovieView.propTypes = {
  movieData: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
}




import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './movie-view.scss';

export class MovieView extends React.Component {


  render() {
    const { movieData, onBackClick } = this.props;


    //----- everything below this line is the new modal stuff that i might just completely scrap
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (                    //Unsure of a lot of the formatting, forgotten some of the HTML basics. Will work on it. 
      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>{movieData.Title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{movieData.Description}</p>
          <div>{movieData.Director}</div>
          <div>{movieData.Genre}</div>
          <div><img>{movieData.ImagePath}</img></div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={() => { onBackClick(null); }}>
            Back
          </Button>
        </Modal.Footer>

      </Modal>
    )



    // return (
    //   <div className="movie-view">
    //     <div className="movie-poster">
    //       <img src={movieData.ImagePath} />
    //     </div>
    //     <div className="movie-title">
    //       <span className="label">Title: </span>
    //       <span className="value">{movieData.Title} </span>
    //     </div>
    //     <div className="movie-description">
    //       <span className="label">Description: </span>
    //       <span className="value">{movieData.Description} </span>
    //     </div>
    //     <button onClick={() => { onBackClick(null); }}>Back</button>
    //   </div>
    // );



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




import React from 'react';
import './Card.css';

const Card = ({ movie }) => {
  return (
<div className='row'>
  <div className='column'>
    <div className="card">
      <img src={movie.img.src} alt={movie.img.alt} width='260px' />
      <h2> {`#${movie.ranking} - ${movie.title} (${movie.year})`} </h2>
      <div className="container">
        <p > {` Distibutor: ${movie.distributor}`} </p>
        <p> {` Amount: ${movie.amount}`} </p>
      </div>
      </div>
    </div>
    </div>


  );
};


export default Card;
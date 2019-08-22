import React from 'react';
import './card.css';
import coffeeImage from '../americano.jpg';

function Card() {
  return (
    <div className="Card">
      <img src={coffeeImage} alt='coffeeImage' className="cardImage"/>
    </div>
  );
}

export default Card;
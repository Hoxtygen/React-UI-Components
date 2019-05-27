import React from 'react';
import './Card.css';

function CardContent({header, para, link})  {
  return (
    <div className = "card-content-container">
      <h4>{ header }</h4>
      <p>{ para }</p>
      <a href = {link}>Reactjs.org</a>
    </div>
  )
}

export default CardContent;

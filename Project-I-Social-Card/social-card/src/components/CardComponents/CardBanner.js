import React from 'react';
import './Card.css';

function CardBanner({bannerSource})   {
  return (
    <div className ="image-container">
      <img src = {bannerSource} alt = ""/>
    </div>
  )
}

export default CardBanner;

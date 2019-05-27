import React from 'react';
import './Header.css';

function ImageThumbnail({imageSource})  {
  return (
    <div className = 'header-image-container'>
      <img src = { imageSource }></img>
    </div>
  )
}

export default ImageThumbnail;

import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";

function Header({}) {
  return (
    <div className = "header-container">
      <h1>Hello People, I'm the Header</h1>
      <ImageThumbnail imageSource = "https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"/>
    </div>

  )
}

export default Header;

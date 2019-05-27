import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle"
import HeaderContent from "./HeaderContent"

function Header() {
  return (
    <div className = "header-container">
      <h1>Hello People, I'm the Header</h1>
      <ImageThumbnail imageSource = "https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"/>
      <HeaderTitle text = "Lambda School @LambdaSchool . 26 jan" />
      <HeaderContent text = "Let's learn React by building simple Interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!"/>
    </div>

  )
}

export default Header;

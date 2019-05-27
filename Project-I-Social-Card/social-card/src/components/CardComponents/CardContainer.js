import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

function CardContainer()  {
  return (
    <div className = "card-container">
      <CardBanner bannerSource = " https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"/>
      <CardContent
         header = "Get Started with React"
          para = "React makes it painless to create interactive UIs. Design simple view for each state in your application"
          link = "https://www.reactjs.org"
           />
    </div>
  )
}

export default CardContainer;

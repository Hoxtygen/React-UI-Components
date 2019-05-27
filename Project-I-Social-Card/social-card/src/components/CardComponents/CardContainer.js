import React from 'react';
import './Card.css';
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

function CardContainer()  {
  return (
    <div className = "card-container">
      <CardBanner />
      <CardContent
         header = "Get Started with React"
          para = "React makes it painless to create interactive UIs. Design simple view for each state in your application"
           />
    </div>
  )
}

export default CardContainer;

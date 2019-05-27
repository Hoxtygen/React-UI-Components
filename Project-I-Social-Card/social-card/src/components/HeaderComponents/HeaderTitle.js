import React from 'react';
import './Header.css';

function HeaderTitle({text})  {
  return (
    <div className = "header-title-container">
      <h4>{ text }</h4>
    </div>
  )
}

export default HeaderTitle;

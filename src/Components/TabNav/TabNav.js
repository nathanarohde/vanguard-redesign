import React from 'react';
import './TabNav.css';

const ticker = (props) => {
  return (
    <span onClick={ props.clicked } className={ props.tabStatus }>{ props.tab }</span>
  )
}

export default ticker;

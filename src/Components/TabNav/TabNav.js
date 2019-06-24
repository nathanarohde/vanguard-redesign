import React from 'react';
import './TabNav.css';

const ticker = (props) => {
  return (
    <section className="tabNav">
      <span>Balance Overview</span>
      <span>Recent Activity</span>
      <span>Performance Summary</span>
      <span>Asset Mix</span>
    </section>
  )
}

export default ticker;

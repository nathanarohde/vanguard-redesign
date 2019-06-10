import React from 'react';
import './Ticker.css';

const ticker = () => {
  return (
    <section className="ticker">
      <p className="tickerWrapper">
        <span>Nasdaq |values|</span>
        <span>S&P |values|</span>
        <span>10-yr T-note |values|</span>
        <span>DIJA |values|</span>
      </p>
    </section>
  )
}

export default ticker;

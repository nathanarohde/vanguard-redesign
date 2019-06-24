import React from 'react';
import './Ticker.css';

const ticker = (props) => {
  return (
    <section className="ticker">
      <p className="tickerWrapper">
        <span>Nasdaq {props.nasdaq.data['Global Quote']["05. price"]}</span>
        <span>S&P {props.sp500.data['Global Quote']["05. price"]}</span>
        <span>10-yr T-note {props.tnote.data['Global Quote']["05. price"]}</span>
        <span>DJIA {props.djia.data['Global Quote']["05. price"]}</span>
      </p>
    </section>
  )
}

export default ticker;

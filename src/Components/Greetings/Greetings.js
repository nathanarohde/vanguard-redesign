import React from 'react';
import './Greetings.css';

const greetings = () => {
  return (
    <section className="greetings">
      <h2>Welcome back, |firstName|</h2>
      <p>
        <span><b>Email: </b>nathanarohde@gmail.com <b>edit </b></span>
        <span><b>Last logon: </b>| date | time | time zone |</span>
      </p>
    </section>
  )
}

export default greetings;

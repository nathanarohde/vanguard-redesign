import React from 'react';
import './FrequentLinks.css';
import '../../UtilityCSS/BodyLinks.css';

const bodyLinks = () => {
  return (
    <section className="frequentLinks">
      <nav className="bodyLinks frequentLinks-nav-left">
        <a href="">Buy funds</a>
        <a href="">Sell funds</a>
        <a href="">Exchange funds</a>
        <a href="">Trade ETFs</a>
        <hr/>
        <a href="">Roll over an account</a>
        <a href="">Transfer an account</a>
      </nav>
      <div className="frequentLinks-investing">
        <h3>
          Investing a Vanguard
        </h3>
        <p>
          It doesn't matter if you're opening your first account or you've been investing for years.  You'll find everything you need to meet you goals here at Vanguard.
        </p>
        <p className="bodyLinks">
          <a href="">See how you can reach your investing goals.</a>
        </p>
      </div>
      <nav className="bodyLinks frequentLinks-nav-right">
        <h5>Frequently Requested Links</h5>
        <a href="">My Watch List</a>
        <a href="">Update beneficiaries</a>
        <a href="">Add a bank</a>
        <a href="">Change my password</a>
        <a href="">Get wire transfer instructions</a>
        <a href="">View my statements</a>
        <a href="">Set up automatic investing</a>
      </nav>
    </section>
  )
}

export default bodyLinks;

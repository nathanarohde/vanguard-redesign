import React from 'react';
import './Promo.css';
import '../../UtilityCSS/BodyLinks.css';
import ESGlogo from "../../vanguard-ESG.png";

const promo = () => {
  return (
    <section className="promo">
      <div className="promo-text-wrapper">
        <h2>
          The next evolution of ESG investing.
        </h2>
        <p>
          <b>Vanguard Global ESG Select Stock Fud</b> is the first actively managed fund in our environmental, social, and governance (ESG) lineup. It includes stocks from financially sound companies with the highest standards for conducting business in support of ESG issues.  You can get started today with as little as $3,000.
        </p>
        <p className="bodyLinks">
          <a href="">See what makes this new fund different</a>
        </p>
      </div>
      <div className="promo-image">
        <img src={ESGlogo}></img>
      </div>
    </section>
  )
}

export default promo;

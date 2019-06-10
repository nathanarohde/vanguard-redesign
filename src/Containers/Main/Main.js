import React, { Component } from 'react';
import Ticker from '../../Components/Ticker/Ticker';
import Greetings from '../../Components/Greetings/Greetings';
import Promo from '../../Components/Promo/Promo';
import FrequentLinks from '../../Components/FrequentLinks/FrequentLinks';

class Main extends Component {
  render() {
    return (
      <main>
        <Ticker></Ticker>
        <Greetings></Greetings>
        <Promo></Promo>
        <p>Here is body content.</p>
        <FrequentLinks></FrequentLinks>
      </main>
    )
  }
}

export default Main;

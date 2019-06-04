import React, { Component } from 'react';
import Ticker from '../../Components/Ticker/Ticker';
import Greetings from '../../Components/Greetings/Greetings';
import Promo from '../../Components/Promo/Promo';
import BodyLinks from '../../Components/BodyLinks/BodyLinks';

class Main extends Component {
  render() {
    return (
      <main>
        <Ticker></Ticker>
        <Greetings></Greetings>
        <Promo></Promo>
        <p>Here is body content.</p>
        <BodyLinks></BodyLinks>
      </main>
    )
  }
}

export default Main;

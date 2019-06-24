import React, { Component } from 'react';
import axios from 'axios';
import Ticker from '../../Components/Ticker/Ticker';
import Greetings from '../../Components/Greetings/Greetings';
import Promo from '../../Components/Promo/Promo';
import FrequentLinks from '../../Components/FrequentLinks/FrequentLinks';
import keys from '../../key.json';

class Main extends Component {
  state = {
    djia: null,
    nasdaq: null,
    sp500: null,
    tnote: null,
  }

  componentDidMount() {
    for (let stock in this.state.stockList) {
      console.log(this.state.stockList[stock]);
    }
    // this.setTicker('djia', 'DJIA');
    // this.setTicker('nasdaq', 'NDAQ');
    // this.setTicker('sp500', '.INX');
    // this.setTicker('tnote', '^TNX');
  }

  setTicker(name, ticker){
    axios.get('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=' + ticker + '&apikey='+ keys.alphavantage)
      .then( response => {
        this.setState({ [name]:response });
      })
      .catch( error => {
        console.log('Error');
      })
  }

  render() {
    return (
      <main>
        { (this.state.djia && this.state.nasdaq && this.state.sp500 && this.state.tnote) &&
          <Ticker djia={this.state.djia} nasdaq={this.state.nasdaq} sp500={this.state.sp500} tnote={this.state.tnote}></Ticker>
        }
        <Greetings></Greetings>
        <Promo></Promo>
        <p>Here is body content.</p>
        <FrequentLinks></FrequentLinks>
      </main>
    )
  }
}

export default Main;

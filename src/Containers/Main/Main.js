import React, { Component } from 'react';
import axios from 'axios';
import Ticker from '../../Components/Ticker/Ticker';
import Greetings from '../../Components/Greetings/Greetings';
import Promo from '../../Components/Promo/Promo';
import FrequentLinks from '../../Components/FrequentLinks/FrequentLinks';
import TabNav from '../../Components/TabNav/TabNav';
import keys from '../../key.json';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      djia: null,
      nasdaq: null,
      sp500: null,
      tnote: null,
      currentTab: "Balance Overview"
    }

    this.tabList = ["Balance Overview", "Recent Activity", "Performance Summary", "Asset Mix"]

    this.changeTab = this.changeTab.bind(this);
  }

  // componentDidMount() {
  //   this.setTicker('djia', 'DJIA');
  //   this.setTicker('nasdaq', 'NDAQ');
  //   this.setTicker('sp500', '.INX');
  //   this.setTicker('tnote', '^TNX');
  // }

  changeTab = (tabName) => {
    this.setState({currentTab: tabName});
    // this.setState({currentTab: tabName}, () => {console.log(this.state.currentTab)});
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

  // <TabNav clicked={ () => this.changeTab("Balance Overview") } tab="Balance Overview" className={(this.state.currentTab === "Balance Overview" ? "active" : false )}></TabNav>

  render() {
    let tabs = (this.tabList).map( tab => {
      let tabStatus = 'inactive';
      if ( this.state.currentTab === tab ){
        tabStatus = 'active';
      }
      return (
        <TabNav clicked={ () => this.changeTab(tab) } tab={ tab } key={ tab } tabStatus ={ tabStatus }></TabNav>
      )
    })

    return (
      <main>
        { (this.state.djia && this.state.nasdaq && this.state.sp500 && this.state.tnote) &&
          <Ticker djia={this.state.djia} nasdaq={this.state.nasdaq} sp500={this.state.sp500} tnote={this.state.tnote}></Ticker>
        }
        <Greetings></Greetings>
        <Promo></Promo>
        <section className="tabNav">
          { tabs }
        </section>
        <p>Here is body content.</p>
        <FrequentLinks></FrequentLinks>
      </main>
    )
  }
}
// <TabNav clicked={ () => this.changeTab("Balance Overview") } tab="Balance Overview" className={(this.state.currentTab === "Balance Overview" ? "active" : false )}></TabNav>
// <TabNav clicked={ () => this.changeTab("Recent Activity") } tab="Recent Activity" className={(this.state.currentTab === "Balance Overview" ? "active" : false )}></TabNav>
// <TabNav clicked={ () => this.changeTab("Performance Summary") } tab="Performance Summary" className={(this.state.currentTab === "Balance Overview" ? "active" : false )}></TabNav>
// <TabNav clicked={ () => this.changeTab("Asset Mix") } tab="Asset Mix" className={(this.state.currentTab === "Balance Overview" ? "active" : false )}></TabNav>

export default Main;

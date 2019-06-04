import React from 'react';
import Main from './Containers/Main/Main';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;

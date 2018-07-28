import React, { Component } from 'react';
import reactlogo from './reactlogo.svg';
import Portfolio from './Portfolio';
import SimpleExpansionContainer from './SimpleExpansionContainer';
import craig from './craig.png';

import './App.css';

class App extends Component {
  render() {
    const portfolio = <Portfolio />;
    return (
      <div id="App">
        <header>
          <h1>Craig Donofrio</h1>
          <h2 className="subtitle">Freelance Writer</h2>
        </header>
        <section>
          <img src={craig} className="float-right"/>
          <h2>About Craig</h2>
          <p>Craig Donofrio is an award-winning* journalist and editor. Through longform features, original journalism and brand consultation, Craig has covered everything from governmental policies to finance to the strange eating habits of the Victorians for publications like Realtor.com, The Street, Make Change, Granite Media and Atlas Obscura.</p>
          <p>He also once, at six-years-old, draped a sheet over his entire body and ran full speed into a doorframe.</p>
          <br />
          <p>* Best Story Award for “Doorway to Fire,” third grade bracket, Veterans Park Elementary</p>
          <p>craig.donofrio @ gmail.com</p>
          <p>@CJDonofrio</p>
          <p><a href="https://www.linkedin.com/in/craig-donofrio-28910920/">View Craig's LinkedIn</a></p>
        </section>
        <SimpleExpansionContainer title="Portfolio" innerComponent={portfolio}/>
        <hr/>
        <footer>
          <p><a href="https://ckjpdx.github.io/portfolio/" target="_blank"><img src={reactlogo} />React App by C Knight Johnson</a></p>
        </footer>
      </div>
    );
  }
}

export default App;

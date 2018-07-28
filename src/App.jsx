import React, { Component } from 'react';
import reactlogo from './reactlogo.svg';
import Portfolio from './Portfolio';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App">
        <header>
          <h1>Craig Donofrio</h1>
          <h2>Freelance Journalist</h2>
        </header>
        <Portfolio />
        <footer>
          <img src={reactlogo}/>
        </footer>
      </div>
    );
  }
}

export default App;

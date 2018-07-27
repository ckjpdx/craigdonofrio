import React, { Component } from 'react';
import reactlogo from './reactlogo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App">
        <h1>Craig Donofrio</h1>
        <footer>
          <img src={reactlogo}/>
        </footer>
      </div>
    );
  }
}

export default App;

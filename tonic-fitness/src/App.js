import React, { Component } from 'react';

import Nav from './Nav.js';
import Signup from './Signup';
import Landing from './Landing.js';
import Goals from './Goals.js';

import './App.sass';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Nav />
        <Signup />
        <Landing />
        <Goals />
      </div>
    );
  }
}

export default App;

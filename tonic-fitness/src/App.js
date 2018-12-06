import React, { Component } from 'react';

import Nav from './Nav.js';
import Login from './Login';
import Landing from './Landing.js';
import Goals from './Goals.js';

import './App.sass';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Nav />
        <Login />
        <Landing />
        <Goals />
      </div>
    );
  }
}

export default App;

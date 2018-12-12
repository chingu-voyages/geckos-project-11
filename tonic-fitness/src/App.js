import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './components/Nav.js';
import Landing from './components/Landing.js';
import Goals from './components/Goals.js';
import Log from './components/Log.js';
import Results from './components/Results.js';

import './stylesheets/App.scss';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Nav />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/goals' component={Goals}/>
          <Route path='/log' component={Log}/>
          <Route path='/results' component={Results}/>
        </Switch>
      </div>
    );
  }
}

export default App;

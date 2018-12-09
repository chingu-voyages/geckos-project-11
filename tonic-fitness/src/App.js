import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Nav from './Nav.js';
import Landing from './Landing.js';
import Goals from './Goals.js';
import Signup from './Signup.js';
import Log from './Log.js';
import Results from './Results.js';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Nav />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/goals' component={Goals}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/log' component={Log}/>
          <Route path='/results' component={Results}/>
          <Landing linkGoals={<Link path='/goals'></Link>}/>
        </Switch>
      </div>
    );
  }
}

export default App;

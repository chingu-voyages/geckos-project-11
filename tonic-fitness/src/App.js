import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './components/Nav.js';
import Login from './components/Login.js';
import Landing from './components/Landing.js';
import Goals from './components/Goals.js';
import Log from './components/Log.js';
import Results from './components/Results.js';

import './stylesheets/App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: [
        'test','test2'
      ]
    }

  }

  renderApp = (e) => {
    this.setState({user:e});
  }

  render() {
    const user = this.state.user;
    return (
      <div id="app-container">
        <Nav />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/goals' render={(props) => <Goals {...props} renderApp={() => this.renderApp}/>}/>
          <Route path='/log' component={Log}/>
          <Route path='/results' 
          render={(props) => <Results {...props} user={user}/>}/>
        </Switch>
          <Route path="/login" component={Login} />
          
      </div>
    );
  }
}

export default App;

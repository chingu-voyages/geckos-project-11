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

  //Store last location for Login modal,
  //This is needed in order to allow the path
  //to change and render Login but keep the
  //current page displayed underneath (modal style)
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    //Destructure this.props
    let { location } = this.props;

    //Set perviousLocation if not currently in the modal
    if (nextProps.history.action !== "POP" &&
        (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    let { location } = this.props;

    //Boolean to determine if the Login modal
    //is showing
    let modalShowing = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    return (
      <div id="app-container">
        <Nav />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/goals' component={Goals}/>
          <Route path='/log' component={Log}/>
          <Route path='/results' component={Results}/>
        </Switch>
        {modalShowing ? <Route path="/login" component={Login} /> : null}
      </div>
    );
  }
}

export default App;

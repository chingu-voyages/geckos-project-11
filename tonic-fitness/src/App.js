import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import Nav from './components/Nav.js';
import Login from './components/Login.js';
import Landing from './components/Landing.js';
import Goals from './components/Goals.js';
import Log from './components/Log.js';
import Results from './components/Results.js';

//Stylesheets
import './stylesheets/App.scss';
import './stylesheets/Nav.scss';
import './stylesheets/Landing.scss';
import './stylesheets/Login.scss';
import './stylesheets/Goals.scss';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: [

      ]
    }

  }

  renderApp = (e) => {
    this.setState({user:e});
  }

  render() {
    const user = this.state.user;
    const {weight, date, misc} = this.state.user;
    return (
      <div id="app-container">
        <Nav />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/goals' render={(props) => <Goals {...props} renderApp={(e)=> this.renderApp(e)}/>}/>
          <Route path='/log' component={Log}/>
          <Route path='/results'
          render={(props) => <Results {...props} user={user} weight={weight} date={date} misc={misc}/>}/>
        </Switch>
          <Route path="/login" component={Login} />

      </div>
    );
  }
}

export default App;

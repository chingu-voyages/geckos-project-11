import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import Nav from './components/Nav.js';
import Login from './components/Login.js';
import Landing from './components/Landing.js';
import Goals from './components/Goals.js';
import Log from './components/Log.js';
import Results from './components/Results.js';
import axios from "axios";

//Stylesheets
import './stylesheets/App.scss';
import './stylesheets/Nav.scss';
import './stylesheets/Landing.scss';
import './stylesheets/Login.scss';
import './stylesheets/Goals.scss';
import './stylesheets/Log.scss';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null,
      user: [

      ]
    }

  }

  //
  /* API CALLS  */
  //
  //Add user to database when SignUp form is submitted
  createUser = (e) => {
    if (!this.state.currentUser) {
      const _username = e.username;
      const _email = e.email;
      const _password1 = e.password;
      const _password2 = e.confirmPass;
      const _location = e.location;

      axios.post("http://localhost:5000/api/register", {
        name: _username,
        email: _email,
        password: _password1,
        password2: _password2,
        location: _location
      })
      .then(res => console.log(res.status))
      .catch(err => alert(err));
    } else {
      alert("User Already Logged In");
    }
  }


  renderApp = (e) => {
    this.setState({user:e});
  }

  render() {
    const user = this.state.user;
    const {weight, goal, by} = this.state.user;
    return (
      <div id="app-container">
        <Nav />
        <Switch>
          <Route exact path='/'
                 component={Landing} />
          <Route path='/goals'
                 render={(props) => <Goals {...props} renderApp={(e)=> this.renderApp(e)}/>}/>
          <Route path='/log'
                 component={Log}/>
          <Route path='/results'
                 render={(props) => <Results {...props} user={user}
                 weight={weight}
                 goal={goal}
                 by={by}/>}/>
        </Switch>
          <Route path="/login"
                 render={(props) => <Login handleCreateUser={this.createUser} />}/>
      </div>
    );
  }
}

export default App;

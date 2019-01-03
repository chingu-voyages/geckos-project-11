import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from "axios";

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
    e.preventDefault();
    if (!this.state.currentUser) {
      const _username = e.target.username.value;
      const _email = e.target.email.value;
      const _password1 = e.target.password.value;
      const _password2 = e.target.confirmPass.value;
      const _location = e.target.location.value;

      axios.post("http://localhost:5000/api/users/register", {
        name: _username,
        email: _email,
        password: _password1,
        password2: _password2,
        location: _location
      })
      .then(response => console.log(response.data))
      .catch(error => {
        //Return error data and log out reason for error
        const errorData = error.response.data;
        //for loop is to catch the first property of error, as we will not know the exact error and do not want to create a catch for every type of error.
        let key="";
        for (let i in errorData){key = i; break;};
        this.handleAPIError(errorData[key]);
      })
    } else {
      alert("User Already Logged In");
    }
  }

  //Handle error from API call and inform user
  handleAPIError = (error) => {
    const errorDialog = document.getElementById("submit-error");
    errorDialog.innerHTML = `<em>*${error}</em>`;
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

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from "axios";
import history from './History.js';

//Components
import Nav from './components/Nav.js';
import Login from './components/Login.js';
import Landing from './components/Landing.js';
import Dashboard from './components/Dashboard.js';
import Goals from './components/Goals.js';
import Log from './components/Log.js';
import Results from './components/Results.js';

//Stylesheets
import './stylesheets/App.scss';
import './stylesheets/Nav.scss';
import './stylesheets/Landing.scss';
import './stylesheets/Dashboard.scss';
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
  //CREATE USER
  //Add user to database when SignUp form is submitted
  createUser = (e) => {
    e.preventDefault();
    /* Check to see if a user is already signed in,
    if not then copy information from form to pass
    to database */
    if (!this.state.currentUser) {
      const _username = e.target.username.value;
      const _email = e.target.email.value;
      const _password1 = e.target.password.value;
      const _password2 = e.target.confirmPass.value;
      const _location = e.target.location.value;

      //API post to register user
      axios.post("http://localhost:5000/api/users/register", {
        name: _username,
        email: _email,
        password: _password1,
        password2: _password2,
        location: _location
      })
      .then(response => {
        const newUser = response.data.name;
        //Next step sets new users name in state as the 'currentUser'
        this.handleSetUser(newUser);
        //Next step 'pushes' new URL using react router history
        //(see function declaration for details)
        this.pushNavigation('/');
      })
      .catch(error => {
        //Return error data and log out reason for error
        const errorData = error.response.data;
        //for loop is to catch the first property of error, as we will not know the exact error and do not want to create a catch for every type of error.
        let key="";
        for (let i in errorData){key = i; break;};
        this.handleAPIError(errorData[key]);
      });
    } else {
      alert("User Already Logged In");
    }
  }

  //Login User
  //Send login request and receive response
  loginUser = (e) => {
    e.preventDefault();
    /* Check to see if user is already logged in,
    if not then proceed with login */
    if (!this.state.currentUser) {
      const _email = e.target.email.value;
      const _password = e.target.password.value;

      //API post to login user
      axios.post("http://localhost:5000/api/users/login", {
        email: _email,
        password: _password
      })
      .then(response => {
        //Save to local storage
        const userInfo = response.data.name;
        console.log(userInfo);
        localStorage.setItem("userName", userInfo);
        //Next step 'pushes' new URL using react router history
        //(see function declaration for details)
        this.pushNavigation('/');
      })
      .catch(error => {
        //Return error data and log out reason for error
        const errorData = error.response.data;
        //for loop is to catch the first property of error, as we will not know the exact error and do not want to create a catch for every type of error.
        let key="";
        for (let i in errorData){key = i; break;};
        this.handleAPIError(errorData[key]);
      });
    } else {
      alert("User Already Logged In");
    }
  }

  //Handle error from API call and inform user
  handleAPIError = (error) => {
    const errorDialog = document.getElementById("submit-error");
    errorDialog.innerHTML = `<em>*${error}</em>`;
  }

  //Sets new user in state as this.state.currentUser
  handleSetUser = (newUser) => {
    this.setState({ currentUser: newUser });
  }

  //Removes user info from local storage
  handleLogoutUser = () => {
    localStorage.removeItem("username");
  }

  //Navigate to new URL
  /* Uses react router dom history, needs History.js and
  needs history passed to <Router> in index.js */
  pushNavigation = (path) => {
    history.push(`${path}`);
  }

  renderApp = (e) => {
    this.setState({user:e});
  }

  componentDidMount() {
    const getUserFromLocalStorage = localStorage.getItem("userName");
    if (!!getUserFromLocalStorage) {
      this.handleSetUser(getUserFromLocalStorage);
    };
  }

  componentDidUpdate() {
    /* If there is currently a user logged in (a name in
    this.state.currentUser) that name will be displayed
    in place of Sign Up / Sign In */
    // if (!!this.state.currentUser) {
    //   const logins = document.getElementById("top-right-of-nav");
    //   logins.innerHTML =
    //   `<h3> Welcome ${this.state.currentUser}! </h3> <br>
    //    <div onClick=${this.handleLogoutUser}>Logout</div>`;
    // } else {
    //   return
    // }
  }

  render() {
    const user = this.state.user;
    const {weight, goal, by} = this.state.user;
    return (
      <div id="app-container">
        <Nav />
        <Switch>
          <Route exact path='/'
               /* Conditional, if a user is present it will display
              Dashboard, else it displays Landing */
                 component={() => !!this.state.currentUser ? <Dashboard/> : <Landing/>} />
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
               render={(props) => <Login handleCreateUser={this.createUser}
               handleLoginUser = {this.loginUser} />}/>
      </div>
    );
  }
}

export default App;

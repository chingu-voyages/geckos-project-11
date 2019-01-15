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
import Footer from './components/Footer.js';

//Stylesheets
import './stylesheets/App.scss';
import './stylesheets/Nav.scss';
import './stylesheets/Landing.scss';
import './stylesheets/Dashboard.scss';
import './stylesheets/Login.scss';
import './stylesheets/Goals.scss';
import './stylesheets/Log.scss';
import './stylesheets/Footer.scss';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null,
      currentUserID: null,
      user: [

      ],
      logs: [
        {
          month: '12',
          day: '23',
          year: '2018',
          meal: 'breakfast',
          calories: '124'
        },

      ],
    }

  }

  //
  /* API CALLS  */
  //
  /* CREATE USER */
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
        const newUserID = response.data.id;
        //Next step sets new users name in state as the 'currentUser'
        this.handleSetUser(newUser, newUserID);
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

  /* LOGIN USER */
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
        const userName = response.data.name;
        const userID = response.data.id;
        console.log(userID);
        localStorage.setItem("userName", userName);
        localStorage.setItem("userId", userID);
        this.handleSetUser(userName, userID);
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

  /* Log API calls*/
  /*Get all logs the user*/
  getUserLogs = (userId) => {
    axios.get("http://localhost:5000/api/logs/:userId/all", {

    })
    .then(response => {
      this.setState({
        logs: response.data
      })
    })
  }
    /*Create logs*/
    postUserLogs = (userId) => {

      const _currentDay       = userId.target.day.value;
      const _currentMonth     = userId.target.month.value;
      const _currentYear      = userId.target.year.value;
      const _currentMeal      = userId.target.meal.value;
      const _currentCalories  = userId.target.calories.value;
      const _user             = userId;
      axios.post("http://localhost:5000/api/logs/new",{
      currentDay : _currentDay,
      currentMonth : _currentMonth,
      currentYear : _currentYear,
      currentMeal : _currentMeal,
      currentCalories : _currentCalories,
      user : _user
    }).then((response)=>{
      this.pushNavigation('/log');
    }).catch((err) => {
    })
    }

  //Handle error from API call and inform user
  handleAPIError = (error) => {
    const errorDialog = document.getElementById("submit-error");
    errorDialog.innerHTML = `<em>*${error}</em>`;
  }

  //Sets new user in state as this.state.currentUser
  handleSetUser = (newUser, newUserID) => {
    this.setState({ currentUser: newUser,
                    currentUserID: newUserID});
  }

  //Removes user info from local storage and
  //navigates back to Landing
  logoutUser = () => {
    localStorage.removeItem("userName");
    this.handleSetUser(null, null);
    this.pushNavigation(`/`);
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
    //On app mount: if user stored in local log them in
    const getUserFromLocalStorage = localStorage.getItem("userName");
    if (!!getUserFromLocalStorage) {
      this.handleSetUser(getUserFromLocalStorage);
    };
  }

  render() {
    //Destructuring
    const {weight, goal, by} = this.state.user;
    const { currentUser, user, logs } = this.state;

    return (
      <div id="app-container">
        <Nav currentUser={currentUser}
             handleLogoutUser={this.logoutUser}/>
        <Switch>
          <Route exact path='/'
               /* Conditional, if a user is present it will display
              Dashboard, else it displays Landing */
                 component={() => !!currentUser ? <Dashboard/> : <Landing/>} />
          <Route path='/goals'
                 render={(props) => <Goals {...props} renderApp={(e)=> this.renderApp(e)}/>}/>
          <Route path='/log'
                 render={(props) => <Log {...props}
                 userLogs={logs} />} />
          <Route path='/results'
                 render={(props) => <Results {...props} user={user}
                 weight={weight}
                 goal={goal}
                 by={by}/>}/>
        </Switch>
        <Route path="/login"
               render={(props) => <Login handleCreateUser={this.createUser}
               handleLoginUser = {this.loginUser} />}/>
             <Footer />
      </div>
    );
  }
}

export default App;

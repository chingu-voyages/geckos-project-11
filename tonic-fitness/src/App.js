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
import './stylesheets/Results.scss';
import './stylesheets/Footer.scss';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null,
      currentUserId: null,
      logs: [],
      user: {},
    }

  }



  //
  /* API CALLS  */
  //
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
        const newUserId = response.data.id;
        //Set user and ID in state
        this.handleSetUser(newUser, newUserId);
        //Get user logs
        this.getUserLogs(newUserId);
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
        const userId = response.data.id;
        localStorage.setItem("userName", userName);
        localStorage.setItem("userId", userId);
        //Set user and ID in state
        this.handleSetUser(userName, userId);
        //Get user logs
        this.getUserLogs(userId);
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


  /* LOG API CALLS*/

  /* Get user logs */
  getUserLogs = (userId) => {
    const _userId = userId;
    axios.get(`http://localhost:5000/api/logs/user/all`, {
      userId: _userId
    })
    .then(response => {
      const returnedLogs = response.data;
      this.setState({
        logs: returnedLogs
      });
    })
    .catch(err => {
      console.log(err);
    })
  }
  /* Create log */
  postUserLogs = (newEntry) => {
    const _currentMonth     = newEntry.month;
    const _currentDay       = newEntry.day;
    const _currentYear      = newEntry.year;
    const _currentMeal      = newEntry.meal;
    const _currentCalories  = newEntry.calories;
    const _user             = this.state.currentUserId;

    axios.post("http://localhost:5000/api/logs/new",{
    month: _currentMonth,
    day: _currentDay,
    year: _currentYear,
    meal: _currentMeal,
    calories: _currentCalories,
    user : _user
  }).then((response)=>{
    this.getUserLogs(this.state.userId);
    this.pushNavigation('/log');
  }).catch((err) => {
    console.log(err);
  })
  }
  /* Remove Log */
  removeUserLog = (id) => {
    axios.post("http://localhost:5000/api/logs/remove", {
      refID: id
    })
    .then(res => {
      this.getUserLogs(this.state.userId);
      this.pushNavigation('/log');
    })
    .catch(err => {
      console.log(err);
    })
  }

  /* Goal API Calls */

  /* Set User Goals */
  postUserGoals = (newEntry) => {
    const _currentWeight = newEntry.weight;
    const _idealWeight = newEntry.goal;
    const _by = newEntry.by;
    const _user = this.state.currentUserId;

    axios.post("http://localhost:5000/api/goals/update",{
    weight: _currentWeight,
    goal: _idealWeight,
    by: _by,
    user : _user
  }).then((response)=>{
    console.log(response.data);
  }).catch((err) => {
    console.log(err);
  })
  }

  /* Get User Goals */
  getUserGoals = (userId) => {
    const _userId = userId;
    axios.get(`http://localhost:5000/api/goals/user/all`, {
      userId: _userId
    })
    .then(response => {
      const returnedGoals = response.data;
      this.setState({
        user: returnedGoals
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  /* Functions */

  //Handle error from Sign Up / Login forms and inform user
  handleAPIError = (error) => {
    const errorDialog = document.getElementById("submit-error");
    errorDialog.innerHTML = `<em>*${error}</em>`;
  }

  /* Sets new user in state as this.state.currentUser and
  sets user ID as this.state.currentUserId */
  handleSetUser = (newUser, newUserId) => {
    this.setState({ currentUser: newUser,
                    currentUserId: newUserId});
  }

  /* Removes user info from local storage and
  navigates back to Landing */
  logoutUser = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
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
    this.postUserGoals(e);
  }

  componentDidMount() {
    //On app mount: if user stored in local log them in
    const getUserFromLocalStorage = localStorage.getItem("userName");
    const getIdFromLocalStorage = localStorage.getItem("userId");
    if (!!getUserFromLocalStorage) {
      this.handleSetUser(getUserFromLocalStorage, getIdFromLocalStorage);
      this.getUserLogs(getIdFromLocalStorage);
      this.getUserGoals(getIdFromLocalStorage);
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
                 userLogs={logs}
                 postLog={this.postUserLogs}
                 removeLog={this.removeUserLog}/>} />
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

import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Signup from './Signup.js';
import Signin from './Signin.js';

const Login = (props) => {
  return (
    <aside id="login-container"
           className="hide flex-col">
      <div className="nav">
        <span className="nav-item">Sign Up</span>
        <span className="nav-item">Sign In</span>
      </div>
      <div className="body flex-col">
        <button className="close"
                onClick={props.closeLogin}>
          X close
        </button>
        <Switch>
          <Route path="/Login/Signup" component={Signup} />
          <Route path="/Login/Signin" component={Signin} />
        </Switch>
      </div>
    </aside>
  );
}

export default Login;

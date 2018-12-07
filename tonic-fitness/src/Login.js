import React from 'react';

import Signup from './Signup.js';

const Login = (props) => {
  return (
    <aside id="login-container"
           className="hide flex-col">
      <div className="login-nav">
        <span className="login-nav-item">Sign Up</span>
        <span className="login-nav-item">Sign In</span>
      </div>
      <div className="login-body flex-col">
        <h4 className="login-close"
            onClick={props.closeLogin}>
          X close
        </h4>
        <Signup />
      </div>
    </aside>
  );
}

export default Login;

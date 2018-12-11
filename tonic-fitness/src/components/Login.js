import React from 'react';

import Signup from './Signup.js';

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
        <Signup />
      </div>
    </aside>
  );
}

export default Login;

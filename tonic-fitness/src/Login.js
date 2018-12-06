import React from 'react';

import Signup from './Signup.js';

const Login = () => {
  return (
    <aside id="login-container" className="hide flex-col">
      <div className="login-nav">
        <span className="login-nav-item">Sign In</span>
        <span className="login-nav-item">Sign Up</span>
      </div>
      <div className="login-body flex-col">
      <Signup />
      </div>
    </aside>
  );
}

export default Login;

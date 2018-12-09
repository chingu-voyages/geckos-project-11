import React from 'react';
import { Link } from 'react-router-dom';

import Login from './Login';

const openLogin = () => {
  let loginContainer = document.getElementById("login-container");
  loginContainer.classList.toggle("hide");
}

const Nav = () => {
  return (
    <nav id="nav-container">
      <header id="header">
        <Link to="/">
          <h1 id="icon">Tonic Fitness</h1>
        </Link>
        <div className="nlogin">
          <span className="nav-login-item"
                onClick= {openLogin}
                >Sign in</span>
          <span className="login-item"
                onClick= {openLogin}
                >Sign up</span>
        </div>
      </header>
      <Login
        closeLogin={openLogin} />
    </nav>
  );
}

export default Nav;

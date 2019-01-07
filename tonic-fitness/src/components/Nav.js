import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav id="nav-container">
      <header id="header">
        <Link to="/">
          <h1 id="icon">Tonic Fitness</h1>
        </Link>
        <div id="top-right-of-nav" className="login">
          <Link to="/login/signup"
                className="login-item">Sign up</Link>
          <Link to="/login/signin"
                className="login-item">Sign in</Link>
        </div>
      </header>
    </nav>
  );
}

export default Nav;

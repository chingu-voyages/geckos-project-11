import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav id="nav-container">
      <header id="header">
        <Link to="/">
          <h1 id="icon">Tonic Fitness</h1>
        </Link>
        <div className="login">
          <Link to="/login"
                className="login-item">Sign up</Link>
          <Link to="/login"
                className="login-item">Sign in</Link>
        </div>
      </header>
    </nav>
  );
}

export default Nav;

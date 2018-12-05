import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav id="nav-container">
        <header id="header">
          <h1 id="nav-header">Tonic Fitness</h1>
          <div className="nav-login">
            <span className="nav-login-item">Sign in</span>
            <span className="nav-login-item">Sign up</span>
          </div>
        </header>
      </nav>
    );
  }
}

export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav id="nav-container">
      <header id="header">
        <Link to="/">
          <h1 id="icon">Tonic Fitness</h1>
        </Link>
        {(!props.currentUser) ?
          (<div id="top-right-of-nav" className="login">
            <Link to="/login/signup"
                  className="login-item">Sign up</Link>
            <Link to="/login/signin"
                  className="login-item">Sign in</Link>
          </div>)
          :
          (<div id="top-right-of-nav" className="login">
            <h3> Welcome {props.currentUser}! </h3>
            <span className="logout"
                  onClick={props.handleLogoutUser}>Logout</span>
          </div>)
            }
      </header>
    </nav>
  );
}

export default Nav;

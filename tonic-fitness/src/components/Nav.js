import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav id="nav-container">
      <header id="header">
        <Link to="/">
          <h1 id="icon">Tonic Fitness</h1>
        </Link>
        {/* Ternary to display Login options if no user logged in or Welcome {name} is user is signed in */
          (!props.currentUser) ?
          (<div id="top-right-of-nav" className="login">
            <Link to="/login/signup"
                  className="login-item">Sign up</Link>
            <Link to="/login/signin"
                  className="login-item">Sign in</Link>
          </div>)
          :
          (<div id="top-right-of-nav" className="welcome">
            <p> Welcome {props.currentUser}! </p>
            <button className="logout"
                  onClick={props.handleLogoutUser}>Logout</button>
          </div>)
            }
      </header>
    </nav>
  );
}

export default Nav;

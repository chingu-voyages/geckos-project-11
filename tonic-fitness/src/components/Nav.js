import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav id="nav-container">
      <header id="header">
        <Link to="/"
              className="top-left-title">
          <h1 className="title">Tonic Fitness</h1>
        </Link>
        <section className="icons">
          <Link to="/goals">
            <i className="fas fa-list-ol link-icons"></i>
          </Link>
          <Link to="/log">
            <i className="fas fa-apple-alt link-icons"></i>
          </Link>
          <Link to="/results">
            <i className="fas fa-chart-bar link-icons"></i>
          </Link>
        </section>
        {/* Ternary to display Login options if no user logged in or Welcome {name} if user is signed in */
          (!props.currentUser) ?
          (<div id="top-right-of-nav-login" className="login">
            <Link to="/login/signup"
                  className="login-item">Sign up</Link>
            <Link to="/login/signin"
                  className="login-item">Sign in</Link>
          </div>)
          :
          (<div id="top-right-of-nav-welcome" className="welcome">
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

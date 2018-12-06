import React from 'react';

const openLogin = () => {
  let loginContainer = document.getElementById("login-container");
  loginContainer.classList.toggle("hide");
}

const Nav = () => {
  return (
    <nav id="nav-container">
      <header id="header">
        <h1 id="nav-header">Tonic Fitness</h1>
        <div className="nav-login">
          <span className="nav-login-item"
                onClick= {openLogin}
                >Sign in</span>
          <span className="nav-login-item"
                onClick= {openLogin}
                >Sign up</span>
        </div>
      </header>
    </nav>
  );
}

export default Nav;

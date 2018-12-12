import React from 'react';

import { Route, Switch } from 'react-router-dom';

//Base Login component, decides which to display
const Login = () => {
  return (
    <aside id="login-container"
           className="flex-col">
      <div className="nav">
        <span className="nav-item">Sign Up</span>
        <span className="nav-item">Sign In</span>
      </div>
      <div className="body flex-col">
        <button className="close">
          X close
        </button>
        <Switch>

          <Route path="/login/signup"
            //Render SignUp on path match
            render={() =>
              <div className="login-body flex-col">
                <form action="" method="post" id="signup-form">
                  <div className="form-field heading-text">
                    Name:
                    <input type="text" name="name" id="name" placeholder="Skinnyboy Thompson" required />
                  </div>
                  <div className="form-field heading-text">
                    Password:
                    <input type="password" name="password" id="password" minLength="6" maxLength="20" placeholder="6-20 characters" required />
                  </div>
                  <div className="form-field heading-text">
                    Location:
                    <input type="text" name="loc" id="loc" placeholder="Where are you from?" required />
                  </div>
                  <input type="submit" name="submit" id="submit" className="heading-text" value="Get Started!" />
                </form>
              </div>
            } />

          <Route path="/login/signin"
            //Render SignIn on path match
            render={() =>
              <div className="login-body flex-col">
                <form action="" method="post" id="signup-form">
                  <div className="form-field heading-text">
                    Name:
                    <input type="text" name="name" id="name" placeholder="Skinnyboy Thompson" required />
                  </div>
                  <div className="form-field heading-text">
                    Password:
                    <input type="password" name="password" id="password" minLength="6" maxLength="20" placeholder="6-20 characters" required />
                  </div>
                  <input type="submit" name="submit" id="submit" className="heading-text" value="Log In" />
                </form>
              </div>
            } />

        </Switch>
      </div>
    </aside>
  );
}


//SIGNUP COMPONENT
// const Signup = () => {
//   return (
//     <div className="login-body flex-col">
//       <form action="" method="post" id="signup-form">
//         <div className="form-field heading-text">
//           Name:
//           <input type="text" name="name" id="name" placeholder="Skinnyboy Thompson" required />
//         </div>
//         <div className="form-field heading-text">
//           Password:
//           <input type="password" name="password" id="password" minLength="6" maxLength="20" placeholder="6-20 characters" required />
//         </div>
//         <div className="form-field heading-text">
//           Location:
//           <input type="text" name="loc" id="loc" placeholder="Where are you from?" required />
//         </div>
//         <input type="submit" name="submit" id="submit" className="heading-text" value="Get Started!" />
//       </form>
//     </div>
//   );
// }


// //SIGNIN COMPONENT
// const Signin = () => {
//   return (
//     <div className="login-body flex-col">
//       <form action="" method="post" id="signup-form">
//         <div className="form-field heading-text">
//           Name:
//           <input type="text" name="name" id="name" placeholder="Skinnyboy Thompson" required />
//         </div>
//         <div className="form-field heading-text">
//           Password:
//           <input type="password" name="password" id="password" minLength="6" maxLength="20" placeholder="6-20 characters" required />
//         </div>
//         <input type="submit" name="submit" id="submit" className="heading-text" value="Log In" />
//       </form>
//     </div>
//   );
// }



export default Login;

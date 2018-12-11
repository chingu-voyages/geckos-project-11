import React from 'react';

const Signup = () => {
  return (
    <div className="login-body flex-col">
      <form action="" method="post" id="signup-form">
        <div className="form-field heading-text">
          Name:
          <input type="text" name="name" id="name" placeholder="Skinnyboy Thompson" required />
        </div>
        <div className="form-field heading-text">
          Password:
          <input type="password" name="password" id="password" minlength="6" maxlength="20" placeholder="6-20 characters" required />
        </div>
        <div className="form-field heading-text">
          Location:
          <input type="text" name="loc" id="loc" placeholder="Where are you from?" required />
        </div>
        <input type="submit" name="submit" id="submit" className="heading-text" value="Get Started!" />
      </form>
    </div>
  );
}

export default Signup;

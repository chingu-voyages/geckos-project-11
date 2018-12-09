import React from 'react';

const Signup = () => {
  return (
    <div className="login-body flex-col">
      <form action="" method="post" id="signup-form">
        <div className="form-field">
          Name:
          <input type="text" name="name" id="form-name" placeholder="Skinnyboy Thompson" required />
        </div>
        <div className="form-field">
          Password:
          <input type="password" name="name" id="form-password" minlength="6" maxlength="20" placeholder="6-20 characters" required />
        </div>
        <div className="form-field">
          Location:
          <input type="text" name="name" id="form-loc" placeholder="Where are you from?" required />
        </div>
      </form>
    </div>
  );
}

export default Signup;

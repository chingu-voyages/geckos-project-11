import React from 'react';

const Signup = () => {
  return (
    <div className="login-body flex-col">
      <form action="" method="post" id="signup-form">
        <div className="form-field">
          Name:
          <input type="text" name="name" id="name" placeholder="Skinnyboy Thompson" required />
        </div>
        <div className="form-field">
          Password:
          <input type="password" name="name" id="password" minlength="6" maxlength="20" placeholder="6-20 characters" required />
        </div>
        <div className="form-field">
          Location:
          <input type="text" name="name" id="loc" placeholder="Where are you from?" required />
        </div>
      </form>
    </div>
  );
}

export default Signup;

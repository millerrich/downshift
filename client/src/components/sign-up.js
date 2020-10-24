import React, { useState } from "react";
import API from '../utils/API';

function SignUp() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

 function handleChangeUser(event) {
    setUserName(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let name = username;
    let pass = password;
    setUser({username: name, password: pass});
    signUpUser();
  }

  function signUpUser() {
    console.log(user);
    API.signUp(user);
  }
  return (
    <div className="container">
      <form className="bg-light">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="username"
            placeholder="Enter username"
            onChange={handleChangeUser}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            aria-describedby="password"
            placeholder="Enter password"
            onChange={handleChangePassword}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default SignUp;

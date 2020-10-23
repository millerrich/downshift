import React, { useState, setState } from "react";
import axios from "axios";

function SignUp() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
//   const [user, setUser] = useState({});

 function handleChangeUser(event) {
    setUserName(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("sign-up-form, username: ");
    console.log(username);
    console.log(password);
    axios
      .post("/", {
        username: username,
        password: password
      })
      .then((response) => {
        console.log(response);
        // if (response.data) {
        //   console.log("successful signup");
        //   .setUserName({
        //     redirectTo: "/login"
        //   });
        // } else {
        //   console.log("Sign-up error");
        // }
      })
      .catch((err) => {
        console.log(err);
      });
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

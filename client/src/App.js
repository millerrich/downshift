import React, { Component } from "react";
import "./App.css";
import setAlarm from './pages/set';
import SignUp from "./components/sign-up";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={SignUp} />
        <Route exact path={process.env.PUBLIC_URL + "/home"} component={setAlarm} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;

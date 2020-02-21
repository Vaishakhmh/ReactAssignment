import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Components/DashBoard";
import LoginPage from "./Containers/LoginPage";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/Login" component={LoginPage} />
      <Route exact path="/" component={Dashboard} />
    </Switch>
  );
}

export default App;

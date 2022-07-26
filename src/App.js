import { Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import ErrorPage402 from "./components/402Page";
import Selectplan from "./components/SelectPlan";
import Register from "./components/welcome";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import Plans from "./components/plans";

function App() {
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/selectplan" component={Selectplan} />
        <Route exact path="/DashBoard" component={DashBoard} />
        <Route exact path="/plans" component={Plans} />
        <Route exact component={ErrorPage402} />
      </Switch>
    </div>
  );
}

export default App;

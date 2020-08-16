import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Exercise from "./Exercise";
import Meals from "./Meals";
import Contact from "./Contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/exercise" component={Exercise} />
    <Route exact path="/meal" component={Meals} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default Main;

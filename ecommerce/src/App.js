import React from 'react';
import {Route, Link, Switch } from "react-router-dom";

import Home from './components/home';
import Login from './components/login';

import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={Login}/>
  </Switch>
);

export default App;

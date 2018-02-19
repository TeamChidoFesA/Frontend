import React from 'react';
import {Route, Link, Switch } from "react-router-dom";

import Home from './components/home';
import Register from './components/register';

import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/registrar" component={Register}/>
  </Switch>
);

export default App;

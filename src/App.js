import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/skills" component = { Skills } />
        <Route path = "/about" component = { About } />
        <Route path = "/" exact component = { Home } />
      </Switch>
    </div>
  );
}

export default App;

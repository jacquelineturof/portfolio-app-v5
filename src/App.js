import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/projects" component = { Projects } />
        <Route path = "/contact" component = { Contact } />
        <Route path = "/skills" component = { Skills } />
        <Route path = "/about" component = { About } />
        <Route path = "/" exact component = { Home } />
      </Switch>
    </div>
  );
}

export default App;

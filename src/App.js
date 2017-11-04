import React, { Component } from 'react';
import Nav from './components/Nav.js';
import Skill from './components/Skill.js';
import Contact from './components/Contact.js';
import Projects from './components/Projects.js';
import Home from './components/Home.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import {Route, Redirect, Link, BrowserRouter as Router } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <main>
          <Route exact path="/project" component={Projects} />
          <Route exact path="/skills" component={Skill} />
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/" component= {Home} />
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;

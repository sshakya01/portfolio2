import React, { Component } from 'react';
import {Route, Redirect, Link, BrowserRouter as Router } from 'react-router-dom';
class Nav extends Component {
  render() {
    return(
      <div className="Nav">
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='skills'><li>Skills</li></Link>
          <Link to='project'><li>Projects</li></Link>
          <Link to='contact'><li>Contact</li></Link>
          </ul>

      </div>
          );
  }
}

export default Nav;

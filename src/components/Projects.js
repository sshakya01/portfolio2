import React, { Component } from 'react';
import snl from '../images/snl.png';
import bucketlist from '../images/bucketlist.png';
import pantry from '../images/pantry.png';

class Projects extends Component {
  render() {
    return(
      <div>
       <h1>My Projects</h1>
      <div className="projects">
        <div className="snl">
          <div className="projectdesc">
            <a href='http://snakesandladder.bitballoon.com/'><img src={snl} alt="snakeboard"/></a>
          </div>
          <div className="projectdesc">
          <h2>Snakes and Ladder</h2>
          <p>Snakes and Ladders, is a two-player game, where a user's objective is to race from 1st cell to 100th cell depending the dice roll. The object gets to climb the ladder if it lands on the base of the ladder. On the other hand it will lose its space if it lands on the cell with snake.</p>
          </div>
          <div className="projectdesc">
          <h4>Technologies used: HTML, CSS, Javascript, jQuery, DOM manipulation. </h4>
          <a href='https://github.com/sshakya01/snakes-and-ladders'><i className="fa fa-github" aria-hidden="true"></i></a>
          </div>
        </div>

        <div className="bucketlist">
          <div className="projectdesc">
          <a href='https://still-river-98602.herokuapp.com/'><img src={bucketlist} alt="bucketlist"/></a>
        </div>
        <div className="projectdesc">
          <h2>Bucket List</h2>
          <p>Bucket List is an app that records a number of experiences or achievements that a person hopes to have or accomplish during their lifetime.</p>
        </div>
        <div className="projectdesc">
          <h4>Technologies used: HTML, CSS, Javascript, Node, Express. </h4>
          <a href='https://github.com/sshakya01/bucketlist'><i className="fa fa-github" aria-hidden="true"></i></a>
          </div>
        </div>

        <div className="pantry">
          <div className="projectdesc">
            <a href='https://pantry2.herokuapp.com/'><img src={pantry} alt="pantry"/>Pantry app</a>
          </div>
          <div className="projectdesc">
            <h2>Pantry</h2>
            <p>Pantry is an app that finds recipes depending on the food you have in your pantry. It makes API calls to food to fork and gives out the recipes depending on your input. The users will be able to add their favourite recipes. Users will also be able to add/delete items in their pantry. </p>
          </div>
          <div className="projectdesc">
            <h2>Technologies used: </h2>
          </div>
        </div>
      </div>
      </div>
      );
  }
}

export default Projects

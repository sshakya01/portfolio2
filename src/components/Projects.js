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
          <a href='http://snakesandladder.bitballoon.com/'><img src={snl} alt="snakeboard"/>Snakes and Ladder</a>
        </div>
        <div className="bucketlist">
          <a href='https://still-river-98602.herokuapp.com/'><img src={bucketlist} alt="bucketlist"/>Bucket List</a>
        </div>
        <div className="pantry">
          <a href=''><img src={pantry} alt="pantry"/>Pantry app</a>
        </div>
      </div>
      </div>
      );
  }
}

export default Projects

import React, { Component } from 'react';
import Background from '../images/homepage.jpg';
import Typist from 'react-typist';

class Home extends Component {
  render() {
    return (
      <div id ="sectionStyle">
      <section>
        <Typist>
          <div className="intro">
            <h1>Hi I am Sajil Shakya</h1>
            <h3>Fullstack Developer | Biomedical Engineer </h3>
            <div className="desc">
              <p>I specialize in developing websites and applications compatible with mobile and desktop screen.</p>
          </div>
          </div>
        </Typist>
      </section>
      </div>
    );
  }
}

export default Home;

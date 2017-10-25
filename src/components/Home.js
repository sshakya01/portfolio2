import React, { Component } from 'react';
import Background from '../images/homepage.jpg';
import Typist from 'react-typist';

var sectionStyle = {
  width: "100%",
  height: "650px",
  backgroundImage: `url(${Background})`
};

class Home extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
        <Typist>
          <div className="intro">
            <h1>Sajil Shakya</h1>
            <h3>Fullstack Developer | Biomedical Engineer </h3>
          </div>
        </Typist>
      </section>
    );
  }
}

export default Home;

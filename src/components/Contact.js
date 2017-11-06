import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return(
      <div className="skill">
        <h1>Contact Information</h1>
        <h1><i class="fa fa-phone" aria-hidden="true"> +1 (347)738-3514 </i></h1>
        <h1><a href='mailto:shakya.sajil@gmail.com'><i class="fa fa-envelope" aria-hidden="true"> shakya.sajil@gmail.com </i></a></h1>
        <h1><a href='https://github.com/sshakya01'><i class="fa fa-github" aria-hidden="true"> github.com/sshakya01</i></a></h1>
        <h1><a href='https://www.linkedin.com/in/sajilshakya'><i class="fa fa-linkedin" aria-hidden="true"> linkedin.com/in/sajilshakya</i></a></h1>
      </div>
      )
  }
}

export default Contact

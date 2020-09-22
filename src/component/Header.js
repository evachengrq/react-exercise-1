import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <img src={require('../assets/avatar.jpg')} />
        <h1>HELLO,</h1>
        <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
        <hr />
      </header>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import './App.scss';
import Header from './component/Header.js';
import './styles/Header.css';
import AboutMe from './component/AboutMe.js';
import './styles/AboutMe.css';
import Education from './component/Education.js';
import './styles/Education.css';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <AboutMe />
        <Education />
      </main>
    );
  }
}

export default App;

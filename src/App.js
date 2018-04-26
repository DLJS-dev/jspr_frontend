import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GeolocationForm from "./components/GeolocationForm"
import LogInContainer from "./components/LogInContainer"
import SignUpContainer from "./components/SignUpContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-intro">
          <LogInContainer />
          <SignUpContainer />
          <GeolocationForm />
        </div>
      </div>
    );
  }
}

export default App;

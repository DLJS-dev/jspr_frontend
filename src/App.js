import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LogInContainer from "./components/LogInContainer"
import SignUpContainer from "./components/SignUpContainer"
import ProfileSetUp from "./components/ProfileSetUp"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-intro">
          <LogInContainer store={this.props.store}/>
          <SignUpContainer />
          <ProfileSetUp />
        </div>
      </div>
    );
  }
}

export default App;

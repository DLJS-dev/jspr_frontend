import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LogInContainer from "./components/LogInContainer"
import SignUpContainer from "./components/SignUpContainer"
import ProfileSetUp from "./components/ProfileSetUp"
import ProfileContainer from  "./components/ProfileContainer"
import FriendsListContainer from "./components/FriendsListContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-intro">
          <LogInContainer store={this.props.store}/>
          <SignUpContainer store={this.props.store}/>
          <ProfileSetUp store={this.props.store}/>
          <ProfileContainer />
          <FriendsListContainer />
        </div>
      </div>
    );
  }
}

export default App;

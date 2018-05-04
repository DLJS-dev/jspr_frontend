import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

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
          <Router>
            <div>
              <Route exact path="/" component={LogInContainer} />
              <Route exact path="/signup" component={SignUpContainer} />
              <Route exact path="/newuser" component={ProfileSetUp} />
              <Route exact path="/profile" component={ProfileContainer} />
              <Route exact path="/friends" component={FriendsListContainer} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;

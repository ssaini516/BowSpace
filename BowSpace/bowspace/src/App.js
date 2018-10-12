import React, { Component } from 'react';
import './App.css';
import ImageLogin from './components/LoginPage/ImageLogin.js';
import LeftNavigationBar from './components/HomePage/LeftNavigationBar.js';
import LoginWrapper from './components/LoginPage/LoginWrapper.js';
import PanelNewPost from './components/CreateNewPost/PanelNewPost.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginWrapper />

        <LeftNavigationBar />

        <PanelNewPost />
      </div>
    );
  }
}

export default App;

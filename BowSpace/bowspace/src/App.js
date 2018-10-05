import React, { Component } from 'react';
import './App.css';
import ImageLogin from './components/LoginPage/ImageLogin.js';
import LeftNavigationBar from './components/HomePage/LeftNavigationBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ImageLogin />
        <LeftNavigationBar />
      </div>
    );
  }
}

export default App;

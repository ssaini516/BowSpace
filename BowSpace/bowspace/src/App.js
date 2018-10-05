import React, { Component } from 'react';
import './App.css';
import LoginWrapper from './components/LoginPage/LoginWrapper.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginWrapper />
      </div>
    );
  }
}

export default App;

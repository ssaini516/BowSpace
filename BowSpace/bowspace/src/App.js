import React, { Component } from 'react';
import './App.css';
import ImageLogin from './components/LoginPage/ImageLogin.js';
<<<<<<< HEAD
import Button from './components/LoginPage/Button.js';
=======
import LoginForm from './components/LoginPage/LoginForm';
>>>>>>> 240682afa13b874f7f21defc040a00b8959ec514

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
<<<<<<< HEAD
        <Button />
=======
        <LoginForm />
>>>>>>> 240682afa13b874f7f21defc040a00b8959ec514
      </div>
    );
  }
}

export default App;

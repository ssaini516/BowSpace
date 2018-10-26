import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginWrapper from './components/LoginPage/LoginWrapper.js';
import PanelNewPost from './components/CreateNewPost/PanelNewPost.js';
import HomePageWrapper from './components/HomePage/HomePageWrapper.js';

class App extends Component {

    routes = [
    {
      path: "/home",
      component: () => <HomePageWrapper />
    },
    {
      exact: true,
      path: "/",
      component: () => <LoginWrapper />
    },
    
    {
      path: "/createPost",
      component: () => <PanelNewPost />
    }
  ];

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {
            this.routes.map(
              (route, index) => 
                <Route 
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />             
            )
          }
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

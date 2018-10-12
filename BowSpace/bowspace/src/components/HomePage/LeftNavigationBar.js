import React, { Component } from 'react';
import Button from '../LoginPage/Button.js';

class LeftNavigationBar extends Component {
    render() {
      return (
        <div id="left-nav" className="card">
            <div className="card-header text-white bg-primary">
                User-name
            </div>
            <div className="card-body">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Username"/>
                </div>
                <a href="#" className="btn btn-primary">search</a>
            </div>
        </div>
      );
    }
  }
export default LeftNavigationBar;
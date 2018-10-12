import React, { Component } from 'react';
import Button from '../LoginPage/Button.js';

class LeftNavigationBar extends Component {
    render() {
      return (
        <div id="left-nav" className="card">
            <div className="card-header text-white bg-primary">
                User-name
            </div>
            <div class="card-body">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Username"/>
                </div>
                <a href="#" class="btn btn-primary">search</a>
            </div>
        </div>
      );
    }
  }
export default LeftNavigationBar;
import React, { Component } from 'react';
import Button from '../LoginPage/Button.js';

class LeftNavigationBar extends Component {
    render() {
      return (
        <div className="left-panel">
            <div class = "row">
                <div class = "col-sm-8">
                    <h2>user name</h2>
                </div>
            </div>
            <p></p>
            <div class = "row">
                <div class = "col-sm-8">
                    <input type="text" class="form-control" name="search-list" />
                </div>
            </div>
            <p></p>
            <div class = "row">
                <div class = "col-sm-8">
                    <Button text ="search"/>
                </div>
            </div>>
        </div>
      );
    }
  }
export default LeftNavigationBar;
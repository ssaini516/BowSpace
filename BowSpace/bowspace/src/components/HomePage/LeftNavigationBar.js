import React, { Component } from 'react';


class LeftNavigationBar extends Component {
    render() {
      return (
        <div className="left-panel">
            <div class = "row">
                <div class = "col-sm-8">
                    <h2>user name</h2>
                </div>
            </div>
            <div class = "row">
                <div class = "col-sm-8">
                <input type="text" class="form-control" name="search-list" />
                </div>
            </div>
        </div>
      );
    }
  }
export default LeftNavigationBar;
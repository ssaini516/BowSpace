import React, { Component } from 'react';
import Button from '../Button/Button.js';

class LeftNavigationBar extends Component {

    render() {
      return (
        <div className="card">
            <div className="card-header text-white bg-primary">
                <h5>User-name</h5>
            </div>
            <div className="card-body">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Username"/>
                </div>

                <Button type="primary">Search</Button>
                
                <p></p>
                <ul className ="list-group">
                    <li className ="list-group-item"><i className ="fa fa-circle"></i> Hai</li>
                    <li className ="list-group-item"><i className ="fa fa-circle"></i> Sandeep </li>
                    <li className ="list-group-item"><i className ="fa fa-circle"></i> Pablo </li>
                </ul>
            </div>
        </div>
      );
    }
  }
export default LeftNavigationBar;
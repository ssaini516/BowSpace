import React, { Component } from 'react';
import Button from '../Button/Button.js';


class LeftNavigationBar extends Component {

    handleLogout = () => {

        sessionStorage.clear();

        this.props.logoutStatus(true);
    }

    render() {
      return (
        <div className="card">
            <div className="card-header text-white bg-primary">
                <h5><i className="fa fa-user-circle-o"></i> Welcome User-name</h5>
                <button className="btn btn-danger mt-4"
                        onClick={this.handleLogout}>
                    Logout
                </button>
            </div>
            <div className="card-body">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Username"/>
                </div>

                <Button type="primary">Search </Button>
                
                <p></p>
                <ul className ="list-group">
                    <li className ="list-group-item"><i className ="fa fa-user-circle-o"></i> Hai <i className ="fa fa-circle"></i></li>
                    <li className ="list-group-item"><i className ="fa fa-user-circle-o"></i> Sandeep <i className ="fa fa-circle"></i></li>
                    <li className ="list-group-item"><i className ="fa fa-user-circle-o"></i> Pablo <i className ="fa fa-circle"></i></li>
                </ul>
            </div>
        </div>
      );
    }
  }
export default LeftNavigationBar;
import React, { Component } from 'react';


class LeftNavigationBar extends Component {

    constructor(props) {
        super(props);
        this.loginedUsername = sessionStorage.getItem('loginUsername');
    }

    handleLogout = () => {

        sessionStorage.clear();

        this.props.logoutStatus(true);
    }

    handleSearchUser = () => {
    
        // get searching keyword
        const searchingUserInput = this.refs.searchUser.value;
        
        // Call API to get matching users
       

            let loginToken = sessionStorage.getItem('loginToken');

            console.log(loginToken);

            let URL = 'http://api.bowspace.ca/rest/users';

            const header = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + loginToken
            });

            const params = '?userid=0&keywords=';

            let requestBody = {
                Method: 'GET',
                headers: header,
                cache: 'no-cache',
                mode: 'cors',
                credentials: 'omit',
                redirect: 'error'
            }

            fetch(URL + params, requestBody)
                .then(response => response.json())
                .then(dataList => console.log(dataList))
               
        
    }

    render() {
      return (
        <div className="card">
            <div className="card-header text-white bg-primary">
                <h5><i className="fa fa-user-circle-o"></i> {`Welcome ${this.loginedUsername}`}</h5>
                <button className="btn btn-danger mt-4"
                        onClick={this.handleLogout}>
                    Logout
                </button>
            </div>
            <div className="card-body">
                <div className="input-group mb-3">
                    <input type="text" 
                           className="form-control" 
                           placeholder="Username"
                           ref="searchUser"
                           />
                </div>

                <button className="btn btn-primary"
                        onClick={this.handleSearchUser}>
                    Search
                </button>
                
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
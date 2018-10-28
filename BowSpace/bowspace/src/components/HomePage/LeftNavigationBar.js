import React, { Component } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage.js';


class LeftNavigationBar extends Component {

    constructor(props) {
        super(props);
        this.loginedUsername = sessionStorage.getItem('loginUsername');
    }

    handleLogout = () => {

        sessionStorage.clear();

        this.props.logoutStatus(true);
    }

    getUsersMatchingSearch = (loginToken, searchKeyWords) => {

        let URL = 'http://api.bowspace.ca/rest/users';

        // Build header obj 
        const header = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + loginToken
        });

        const params = '?userid=0&keywords=' + searchKeyWords;

        // Build request bosy
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
           .then(data => {

               const listMatchingUsers = data.MatchingUsers;

               if (listMatchingUsers !== null) {

                   this.props.searchUsers(listMatchingUsers);

               } else {
                   // user not found
                   this.props.foundUser(false);
               }      
           })          
    }

    handleSearchUser = () => {
    
        // get searching keyword
        const searchingUserInput = this.refs.searchUser.value;
        
        // Call API to get matching users  
        let loginToken = sessionStorage.getItem('loginToken');

        // Invoke function to get matching user from API
        this.getUsersMatchingSearch(loginToken, searchingUserInput);                  
    }

    render() {

        const listUsers = this.props.listUsers;
        const isUserNotFound = this.props.isUserNotFound;
        const error = (isUserNotFound) ? <ErrorMessage>User Not Found !!!</ErrorMessage> 
                      : null;

        return (
            <div className="card">
                <div className="card-header text-white bg-primary">
                    <h5><i className="fa fa-user-circle-o"></i> {`Welcome ${this.loginedUsername}`}</h5>
                    <button className="btn btn-danger mt-4 btn-sm"
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
                    
                        {error}

                    <ul className ="list-group">

                        {
                            listUsers.map(
                                (user, index) => {
                                    return <li key={index}
                                               className="list-group-item"
                                            >
                                                <i className="fa fa-user-circle-o"></i> 
                                                    <span> {user.UserName} </span> 
                                                <i className="fa fa-circle"></i>
                                            </li>
                                }
                            )
                        }

                    </ul>
                </div>
            </div>
        );
    }
  }
export default LeftNavigationBar;
import React, { Component } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage.js';
import Scroll from './Scroll.js';


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
         
        let loginToken = sessionStorage.getItem('loginToken');

        // Invoke function to get matching user from API
        this.getUsersMatchingSearch(loginToken, searchingUserInput);                  
    }


    getPostMatchingSearch = (loginToken, searchingPostInput)=> {
        let params = ""
        let url  =  'http://api.bowspace.ca/rest/posts'
        if(this.refs.Radio1.checked === true)
        {
            params = '?postid=' + searchingPostInput; 
        }
        else if(this.refs.Radio2.checked === true)
        {
            params = '?senderid='+ searchingPostInput;
            
        }
        else if(this.refs.Radio3.checked === true)
        {
            params = '?&keywords=' + searchingPostInput;
        }

        // Build header obj 
        const header = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + loginToken
        });


        // Build request bosy
        let requestBody = {
            Method: 'GET',
            headers: header,
            cache: 'no-cache',
            mode: 'cors',
            credentials: 'omit',
            redirect: 'error'
        }

        fetch(url + params, requestBody)
        .then(response => response.json())
        .then(data => {

            const listMatchingPosts = data.MatchingPosts;

            if (listMatchingPosts !== null) {

                this.props.matchPosts(listMatchingPosts);

            }
        })     
    }

    handleSearchPost = () => {

        // get searching keyword
        const searchingPostInput = this.refs.SearchPost.value;

        let loginToken = sessionStorage.getItem('loginToken');

        // Invoke function to get matching Post from API
        this.getPostMatchingSearch(loginToken, searchingPostInput);

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
                        Search User
                    </button>

                    <p></p>
                     <div className="input-group mb-3">
                        <input type="text" 
                                className="form-control" 
                                placeholder="SearchPost"
                                ref="SearchPost"
                                />
                    </div>

                    <div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="RadioOptions" ref="Radio1" id="Radio1"></input>
                            <label className="form-check-label" htmlFor="Radio1">Post ID</label>
                            
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="RadioOptions" ref="Radio2" id="Radio2"></input>
                            <label className="form-check-label" htmlFor="Radio2">User Name</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="RadioOptions" ref="Radio3" id="Radio3"></input>
                            <label className="form-check-label" htmlFor="Radio3">Keywords</label>
                        </div>
                    </div>
                    <button className="btn btn-primary mt-3"
                            onClick={this.handleSearchPost}>
                        Search Post
                    </button>
                    
                    <p></p>
                    
                        {error}

                    <ul className ="list-group">
                        <Scroll>

                            {
                                listUsers.map(
                                    (user, index) => {
                                        return <li key={index}
                                                className="list-group-item"
                                                >
                                                    <i className="fa fa-user-circle-o"></i> 
                                                        <span> {user.UserName} </span> 
                                                    <i className="fa fa-circle"></i> 
                                                        <span> ID: {user.UserId}</span>
                                                </li>
                                    }
                                )
                            }
                            
                        </Scroll>

                    </ul>
                </div>
            </div>
        );
    }
  }
export default LeftNavigationBar;
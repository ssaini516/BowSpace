import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';


// test
class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            isInputBlank: false,
            isWrongCredentials: false,
            isSigning: false
        }
    }

    AuthenticateLogin = (username, password) => {

        this.setState({isSigning: true});

        const URL = "http://api.bowspace.ca/rest/auth/login";

        const APIRequest = {
            EmailAddress: username,
            Password: password
        }

        const requestBody = {
            method: 'POST',
            cache: 'no-cache',
            mode: 'cors',
            credentials: 'omit',
            body: JSON.stringify(APIRequest)
        }

        console.log("[Index] Preparing to fetch API login");

        fetch(URL, requestBody)
            .then(response => response.json())
            .then(data => {

                let validUsername = data.Login.UserName;
                let token = data.Login.LoginToken;
                let status = data.Status;
                let userId = data.Login.UserId;

                if (status === 'success') {

                    // store token, username to browser session
                    sessionStorage.setItem('loginToken', token);
                    sessionStorage.setItem('loginUsername', validUsername);
                    sessionStorage.setItem('loginUserID', userId);

                    // update state to confirm user logined successfully
                    this.setState({ isAuthenticated: true });
                    this.setState({isSigning: false});
                }
            })
            .catch(err => {
                console.error(err);
                this.setState({ isWrongCredentials: true });
            })  
    }

    handleLoginSubmit = (e) => {

        e.preventDefault();

        const usernameInput = this.refs.username.value;

        const passwordInput = this.refs.password.value;

        if (usernameInput && passwordInput)
        {
            this.AuthenticateLogin(usernameInput, passwordInput);

        } else {
            // user leave input blank
            this.setState({isInputBlank: true});
        }          
    }

    render(){

        const isLoading = this.state.isSigning;
        const loadingIcon = (isLoading) ? <Loader type="ThreeDots" 
                                                  color="white"
                                                  height={50}
                                                  width={50}
                                                  id="loader"
                                                  /> : null;

        return( 
            <div className="wrapper">

                {
                    (this.state.isInputBlank) ? <div className="display-warning">Username and password cannot be empty</div>
                    : (this.state.isWrongCredentials) ? <div className="display-warning">Invalid username and password</div>
                    : <div className="hide-warning"></div>
                }

                <form className="container">
                    <div className="form-group">
                        <label>Email</label>
                        <input id="width1" 
                               type="email" 
                               className="form-control" 
                               placeholder="Please enter your email" 
                               ref="username" 
                               required
                               />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input id="width2" 
                               type="password" 
                               className="form-control" 
                               placeholder="**********" 
                               ref="password"
                               required
                               />
                    </div> 

                    <button id="button-log" 
                            className="btn btn-success"
                            onClick={this.handleLoginSubmit}>
                        Sign In <i className="fa fa-sign-in" aria-hidden="true"></i>
                    </button>

                    <div id="loader">    
                        {loadingIcon}
                    </div>
                                          
                    <Redirect to={(this.state.isAuthenticated) ? "/home" : "/"} />
                </form>
            </div>
        );
    }
}

export default LoginForm;
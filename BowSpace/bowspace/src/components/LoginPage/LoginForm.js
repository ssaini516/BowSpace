import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


// test
class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            isInputBlank: false,
            isWrongCredentials: false
        }
    }

    AuthenticateLogin = (username, password) => {

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

                console.log(validUsername);
                console.log(token);
                console.log(status);
                console.log(userId);

                if (status === 'success') {

                    // store token, username to browser session
                    sessionStorage.setItem('loginToken', token);
                    sessionStorage.setItem('loginUsername', validUsername);

                    // update state to confirm user logined successfully
                    this.setState({ isAuthenticated: true })
                }
                else {
                    // username and pwd input wrong
                    this.setState({ isWrongCredentials: true })
                }
            })
            .catch(err => console.error(err))  
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
                        <button id="button-log" className="btn btn-success"
                                onClick={this.handleLoginSubmit}>
                            Sign In <i className="fa fa-sign-in" aria-hidden="true"></i>
                        </button>
                        <Redirect to={(this.state.isAuthenticated) ? "/home" : "/"} />
                </form> 
            </div>
        );
    }
}

export default LoginForm;
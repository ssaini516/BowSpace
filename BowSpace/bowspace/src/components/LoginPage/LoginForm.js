import React, { Component } from 'react';


// test
class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false
        }
    }

    handleLoginSubmit = (e) => {

        e.preventDefault();

        const usernameInput = this.refs.username.value;

        const passwordInput = this.refs.password.value;

        const URL = "http://api.bowspace.ca/rest/auth/login";

        const APIRequest = {
            EmailAddress: usernameInput,
            Password: passwordInput
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
                console.log(data);

                let validUsername = data.Login.UserName;
                let token = data.Login.LoginToken;
                let status = data.Status;

                if (status === 'success') {
                    // update state to confirm user logined successfully
                    this.setState({ isAuthenticated: true})

                    // store token to browser session
                    sessionStorage.setItem('loginToken', token);
                }
            })
            .catch(err => console.error(err))      
    }

    render(){
        return( 
            <div className="wrapper">
                <form className="container">
                    <div className="form-group">
                        <label>Email</label>
                        <input id="width1" 
                               type="email" 
                               className="form-control" 
                               placeholder="Please enter your email" 
                               ref="username" 
                               />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input id="width2" 
                               type="password" 
                               className="form-control" 
                               placeholder="**********" 
                               ref="password"
                               />
                    </div>
                    <button className="btn btn-success"
                            onClick={this.handleLoginSubmit}>
                        Sign In <i className="fa fa-sign-in" aria-hidden="true"></i>
                    </button>
                </form> 
            </div>
        );
    }
}

export default LoginForm;
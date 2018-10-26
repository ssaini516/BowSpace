import React, { Component } from 'react';
import ImageLogin from './ImageLogin.js';
import LoginForm from './LoginForm.js';
import Button from '../Button/Button.js';
import { Link } from 'react-router-dom';
import './Loggin-page.css';


class LoginWrapper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    onUserNameInput = (username) => {

        // update username state based on user input
        this.setState({username: username})
    }

    onPasswordInput = (pwd) => {

        // update password state based on password input
        this.setState({password: pwd});
    }

    componentDidMount() {

    }

    render() {
        
        return (
            <div className="login-wrapper">

                <ImageLogin />

                <LoginForm userNameInput={this.onUserNameInput}
                           passwordInput={this.onPasswordInput}
                />
            </div>
        )
    };
}

export default LoginWrapper;
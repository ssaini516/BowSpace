import React, { Component } from 'react';
import ImageLogin from './ImageLogin.js';
import LoginForm from './LoginForm.js';
import Button from '../Button/Button.js';
import { Link } from 'react-router-dom';
import './Loggin-page.css';


class LoginWrapper extends Component {

    render() {

        return (
            <div className="login-wrapper">

                <ImageLogin />

                <LoginForm />
            </div>
        )
    };
}

export default LoginWrapper;
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

    render() {
        return (
            <div className="login-wrapper">
                <ImageLogin />
                <LoginForm />
                <Link to="/home">
                    <Button id="btn-login" type="success">
                        Sign In <i className="fa fa-sign-in" aria-hidden="true"></i>
                    </Button>
                </Link>        
            </div>
        )
    };
}

export default LoginWrapper;
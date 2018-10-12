import React from 'react';
import ImageLogin from './ImageLogin.js';
import LoginForm from './LoginForm.js';
import Button from './Button.js';
import { Link } from 'react-router-dom';
import './Loggin-page.css';


const LoginWrapper = () => {

    return (
        <div className="login-wrapper">
            <ImageLogin />
            <LoginForm />
            <Link to="/home">
                <Button />
            </Link>        
        </div>
    );
}

export default LoginWrapper;
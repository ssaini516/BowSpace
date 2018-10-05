import React from 'react';
import ImageLogin from './ImageLogin.js';
import LoginForm from './LoginForm.js';
import Button from './Button.js';
import LeftNavigationBar from '../HomePage/LeftNavigationBar.js';
import './Loggin-page.css';


const LoginWrapper = () => {

    return (
        <div className="login-wrapper">
            <ImageLogin />
            <LoginForm />
            <LeftNavigationBar />
            <Button />
        </div>
    );
}

export default LoginWrapper;
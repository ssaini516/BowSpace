import React from 'react';
import ImageLogin from './ImageLogin.js';
import LoginForm from './LoginForm.js';
import Button from './Button.js';

const LoginWrapper = () => {

    return (
        <div className="login-wrapper">
            <ImageLogin />
            <LoginForm />
            <Button />
        </div>
    );
}

export default LoginWrapper;
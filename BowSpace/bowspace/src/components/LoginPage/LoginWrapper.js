import React, { Component } from 'react';
import ImageLogin from './ImageLogin.js';
import LoginForm from './LoginForm.js';
import './Loggin-page.css';


class LoginWrapper extends Component {

    render() {

        return (
            <div className="container">
                <div className="animated rollIn">
                    <div className="row">
                    
                        <div className="col-sm-0 col-md-3 col-lg-4">
                        
                        </div>


                        <div className="col-sm-12 col-md-6 col-lg-4 mt-5" id="login-wrapper">
                        

                            <ImageLogin />

                            <LoginForm />
                        </div>


                        <div className="col-sm-0 col-md-3 col-lg-4">
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default LoginWrapper;
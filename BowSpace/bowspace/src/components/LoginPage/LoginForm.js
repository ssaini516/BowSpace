import React, { Component } from 'react';


// test
class LoginForm extends Component {

    handleLoginSubmit = (e) => {

        e.preventDefault();

        const usernameInput = this.refs.username.value;

        const passwordInput = this.refs.password.value;

        this.props.userNameInput(usernameInput);

        this.props.passwordInput(passwordInput);
        
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
                            onClick={this.handleLoginSubmit}
                    >
                        Sign In <i className="fa fa-sign-in" aria-hidden="true"></i>
                    </button>
                </form> 
            </div>
        );
    }
}

export default LoginForm;
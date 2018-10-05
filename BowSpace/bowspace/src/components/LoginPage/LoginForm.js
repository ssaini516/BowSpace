import React, { Component } from 'react';


class LoginForm extends Component {
    render(){
        return( 
            <div className="wrapper">
                <form className="container">
                    <div className="container">
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Please enter your email"></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="**********"></input>
                    </div>
                </form> 
            </div>
        );
    }
}

export default LoginForm;
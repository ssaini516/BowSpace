import React, { Component } from 'react';



class LoginForm extends Component {
    render(){
        return( 
            <div className="wrapper">
                <form className="container">
                    <div className="form-group">
                        <label>Email</label>
                        <input id="width1" type="email" className="form-control" placeholder="Please enter your email"></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input id="width2" type="password" className="form-control" placeholder="**********"></input>
                    </div>
                </form> 
            </div>
        );
    }
}

export default LoginForm;
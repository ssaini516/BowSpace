import React, { Component } from 'react';

class Button extends Component
{
    render(){
        return(
            <div>
                <button id="login-btn" className = "btn btn-success">Sign in <i className="fa fa-sign-in" aria-hidden="true"></i>
                </button> 
            </div>
        );
        
    }
}
export default Button
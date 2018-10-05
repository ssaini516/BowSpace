import React, { Component } from 'react';

class Button extends Component
{
    render(){
        return(
            <div>
                <button id="login-btn" className = "btn btn-success">Sign in<span class="glyphicons glyphicons-envelope"></span></button> 
            </div>
        );
        
    }
}
export default Button
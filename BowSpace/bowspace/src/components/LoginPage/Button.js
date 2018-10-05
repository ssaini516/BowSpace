import React, { Component } from 'react';

class Button extends Component
{
    render(){
        return(
            <div>
<<<<<<< Updated upstream
                <button type = "button" className = "btn btn-success btn-lg">{this.props.text}</button> 
=======
                <button id="login-btn" className = "btn btn-success">Sign in</button> 
>>>>>>> Stashed changes
            </div>
        );
        
    }
}
export default Button
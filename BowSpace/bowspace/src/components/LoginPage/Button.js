import React, { Component } from 'react';

class Button extends Component
{
    render(){
        return(
            <div>
                <button type = "button" className = "btn btn-success btn-lg">{this.props.text}</button> 
            </div>
        );
        
    }
}
export default Button
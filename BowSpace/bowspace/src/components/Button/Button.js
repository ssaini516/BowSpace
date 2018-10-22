import React from 'react';

const Button = (props) => {

    return(
        <button id={props.id} className={`btn btn-${props.type}`}>{props.children}</button>
    );
}

export default Button;
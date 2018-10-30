import React from 'react';

const Scroll = (props) => {

    const height = props.height;

    return(
        <div style={{overflowY: 'scroll', height: height}}>
            {props.children}
        </div>
    );
}
export default Scroll;
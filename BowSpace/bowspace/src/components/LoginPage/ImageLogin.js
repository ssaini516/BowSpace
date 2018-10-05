import React from 'react';

const ImageLogin = () => {

    return(
        <div>
            <img src={require('../../images/logo.jpg')} 
                 alt="logo image"
                 style={{width: 200 + "px", height: 200 + "px"}} />
        </div>
    );
}

export default ImageLogin;
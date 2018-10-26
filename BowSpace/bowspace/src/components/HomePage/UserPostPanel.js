import React from 'react';

const UserPostPanel = ({username, title, message}) => {

    return(
        <div className="user-post-panel">
            <div className="card mb-4">
                <div className="card-header">
                    {username}
                </div>

                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {message}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UserPostPanel;
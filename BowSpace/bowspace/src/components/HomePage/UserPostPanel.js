import React from 'react';

const UserPostPanel = ({postId, time, message}) => {

    return(
        <div className="user-post-panel">
            <div className="card mb-4">
                <div className="card-header">
                  <p> {postId}</p>
                </div>

                <div className="card-body">
                    <p className="card-text">
                        {message}
                        <p style = {{"padding-left" : "75%"}}> {time} </p>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UserPostPanel;
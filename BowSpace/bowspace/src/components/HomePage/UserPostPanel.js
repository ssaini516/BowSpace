import React from 'react';

const UserPostPanel = ({postId, time, message}) => {

    return(
        <div className="user-post-panel">
            <div className="card mb-4">
                <div className="card-header">
                  <p> Post Id: {postId}</p>
                  
                </div>

                <div className="card-body">
                    <p className="card-text">
                        {message}
                    </p>
                    <p style = {{"paddingLeft" : "75%"}}> Time: {time} </p>
                </div>
            </div>
        </div>
    );
}

export default UserPostPanel;
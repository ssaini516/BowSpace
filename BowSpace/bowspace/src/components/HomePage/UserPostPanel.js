import React from 'react';

const UserPostPanel = ({username, title, message}) => {

    return(
        <div className="user-post-panel">
            <div class="card mb-4">
                <div class="card-header">
                    {username}
                </div>

                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">
                        {message}
                    </p>
                    <a href="#" class="btn btn-primary">Detail</a>
                </div>
            </div>
        </div>
    );
}

export default UserPostPanel;
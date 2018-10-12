import React from 'react';
import UserPostPanel from './UserPostPanel.js';

const ListPostsOfUsers = () => {

    return(
        <div className="list-posts-of-users">
            <UserPostPanel />
            <UserPostPanel />
            <UserPostPanel />
            <UserPostPanel />
        </div>
    );
}
export default UserPostPanel;
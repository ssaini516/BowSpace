import React from 'react';
import UserPostPanel from './UserPostPanel.js';
import Scroll from './Scroll.js';

const ListPostsOfUsers = () => {

    return(
        <div id="list-posts-of-users">
            <Scroll>
                <UserPostPanel />
                <UserPostPanel />
                <UserPostPanel />
                <UserPostPanel />
                <UserPostPanel />
                <UserPostPanel />
                <UserPostPanel />
                <UserPostPanel />
            </Scroll>            
        </div>
    );
}
export default ListPostsOfUsers;
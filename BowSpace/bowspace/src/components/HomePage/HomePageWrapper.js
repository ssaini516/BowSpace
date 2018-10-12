import React from 'react';
import LeftNavigationBar from './LeftNavigationBar.js';
import ListPostsOfUsers from './ListPostsOfUsers.js';

const HomePageWrapper = () => {

    return(
        <div className="homepage-wrapper">
            <LeftNavigationBar />
            <ListPostsOfUsers />
        </div>
    );
}
export default HomePageWrapper;
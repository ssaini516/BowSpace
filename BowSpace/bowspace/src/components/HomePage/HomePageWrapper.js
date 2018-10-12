import React from 'react';
import LeftNavigationBar from './LeftNavigationBar.js';
import ListPostsOfUsers from './ListPostsOfUsers.js';

const HomePageWrapper = () => {

    return(
        <div id="home-page-wrapper" className="container-fluid mt-3">
            <div className="row">
                <div className="col-md-4 col-lg-3">
                    <LeftNavigationBar />
                </div>

                <div className="col-md-1 col-lg-1">
                    
                </div>

                <div className="col-md-6 col-lg-7">
                    <ListPostsOfUsers />
                </div>             
            </div>           
        </div>
    );
}
export default HomePageWrapper;
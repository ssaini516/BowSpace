import React from 'react';
import { Link } from 'react-router-dom';
import LeftNavigationBar from './LeftNavigationBar.js';
import ListPostsOfUsers from './ListPostsOfUsers.js';
import CreateButton from './CreateButton.js';
import Footer from './Footer.js';


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
            <div className="row mb-4">
                <div className="col-md-9 col-lg-9">
                    
                    </div>  
                    <div className="col-md-2 col-lg-2">
                    <Link to="/createPost">
                            <CreateButton />
                    </Link>                      
                    </div>  
            </div>   
            <div className="row">
                <div className="col-md-6 col-lg-11">
                    <Footer />
                </div>   
            </div>          
        </div>
    );
}
export default HomePageWrapper;
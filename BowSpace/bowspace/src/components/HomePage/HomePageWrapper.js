import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LeftNavigationBar from './LeftNavigationBar.js';
import ListPostsOfUsers from './ListPostsOfUsers.js';
import Button from '../Button/Button.js';
import Footer from './Footer.js';
import './HomePage.css';


class HomePageWrapper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listPosts: [
                {username: "hdo488", title: "BVC", message: "Welcome to BowSpace"},
                { username: "s.saini", title: "Hi there", message: "Welcome to BowSpace"},
                { username: "pablo", title: "Hey Yo", message: "Welcome to BowSpace"}
            ]
        }

        this.token = sessionStorage.getItem('loginToken');
    }

    ///
    /// Render
    ///
    render() {
        console.log(this.token);
        return(
            <div id="home-page-wrapper" className="container-fluid mt-3">
            
                <div className="row">
                    <div className="col-md-4 col-lg-3">
                        <LeftNavigationBar />
                    </div>

                    <div className="col-md-1 col-lg-1">
                        
                    </div>

                    <div className="col-md-6 col-lg-7">
                        <ListPostsOfUsers listPosts={this.state.listPosts}/>
                    </div>
                </div> 

                <div className="row mb-4">
                    <div className="col-md-9 col-lg-9">
                        
                    </div>  

                    <div className="col-md-2 col-lg-2 mt-3">
                        <Link to="/createPost">
                            <Button type="primary">Create New Post</Button>
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
}
export default HomePageWrapper;
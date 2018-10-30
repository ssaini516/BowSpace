import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
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
            ],
            isLogout: false,
            listSearchedUsers: [],
            listSearchedPosts: [],
            isUserNotFound: false       
        }

        this.token = sessionStorage.getItem('loginToken');
    }

    hanldeLogout = () => {

        if(this.state.isLogout || !this.token) {
            return <Redirect to="/" />
        }   
    }

    hanleLogoutClick =(logoutStatus) => {

        if(logoutStatus) {
            this.setState({isLogout: true})
        }
    }

    handleSearchUser = (listMatchingUser) => {

        this.setState({ listSearchedUsers: listMatchingUser });
        this.setState({ isUserNotFound: false });     
    }

    handleFoundUser = (isUserFound) => {

        if (isUserFound === false) {

            this.setState({ isUserNotFound : true });
        }
    }

    handleSearchPosts = (listMatchingPosts) => {

        this.setState({ listPosts: listMatchingPosts });
        //this.setState({ isPostNotFound: false });     
    }
    ///
    /// Render
    ///
    render() {

        return(
            <div id="home-page-wrapper" className="container-fluid mt-3 ml-5">
                {this.hanldeLogout()}
                <div className="row">
                    <div className="col-md-4 col-lg-3">
                        <LeftNavigationBar logoutStatus={this.hanleLogoutClick}
                                           searchUsers={this.handleSearchUser}
                                           listUsers={this.state.listSearchedUsers}
                                           foundUser={this.handleFoundUser}
                                           isUserNotFound={this.state.isUserNotFound}
                                           matchPosts = {this.handleSearchPosts}
                        />
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
                            <button className="btn btn-md btn-success btn-lg" id="btn-create-newPost">Create New Post  <i className="fa fa-file-text-o"></i>  </button>
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
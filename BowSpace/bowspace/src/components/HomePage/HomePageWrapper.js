import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import LeftNavigationBar from './LeftNavigationBar.js';
import ListPostsOfUsers from './ListPostsOfUsers.js';
import Footer from './Footer.js';
import './HomePage.css';


class HomePageWrapper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listPosts: [],
            isLogout: false,
            listSearchedUsers: [],
            isUserNotFound: false,
            isPostNotFound: false      
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

        if (this.state.listPosts.length === 0) {

            this.setState({ isPostNotFound: true });

            return;
        }
        
        this.setState({ isPostNotFound: false });
            
    }

    displayListOfUsersWhenUserLogin = (loginToken) => {
        
        // this function is to retrieve all users to display
        // on left panel by default

        let URL = 'http://api.bowspace.ca/rest/users';

        // Build header obj 
        const header = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + loginToken
        });

        const params = '?userid=0&keywords=';

        // Build request bosy
        let requestBody = {
            Method: 'GET',
            headers: header,
            cache: 'no-cache',
            mode: 'cors',
            credentials: 'omit',
            redirect: 'error'
        }

        fetch(URL + params, requestBody)
            .then(response => response.json())
            .then(data => data.MatchingUsers)
            .then(listUsers => {
                
                // store listOfUsers in session
                // for gloabal access
                sessionStorage.setItem('listOfUsers', JSON.stringify(listUsers));

                this.setState({ listSearchedUsers: listUsers })
            })
            .catch(err => console.error(err))
    }

    displayListOfPostsWhenUserLogin = (loginToken) => {

        // This function is to retieve all posts to display on posts panel
        // when user login in successfully

        let URL = 'http://api.bowspace.ca/rest/posts';

        let param = "?postid=0";

        const header = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + loginToken
        });

        // Build request bosy
        let requestBody = {
            Method: 'GET',
            headers: header,
            cache: 'no-cache',
            mode: 'cors',
            credentials: 'omit',
            redirect: 'error'
        }

        fetch(URL + param, requestBody)
            .then(response => response.json())
            .then(data => data.MatchingPosts)
            .then(listOfPosts => {
                this.setState({ listPosts: listOfPosts})
            })
            .catch(err => console.error(err));
    }

    componentDidMount() {
        
        let loginToken = sessionStorage.getItem('loginToken');
        
        this.displayListOfUsersWhenUserLogin(loginToken);

        this.displayListOfPostsWhenUserLogin(loginToken);
        
    }

    ///
    /// Render
    ///
    render() {
        
        return(
            <div id="home-page-wrapper" className="container-fluid mt-3 ">
                {this.hanldeLogout()}
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <LeftNavigationBar logoutStatus={this.hanleLogoutClick}
                                           searchUsers={this.handleSearchUser}
                                           listUsers={this.state.listSearchedUsers}
                                           foundUser={this.handleFoundUser}
                                           isUserNotFound={this.state.isUserNotFound}
                                           matchPosts = {this.handleSearchPosts}
                        />
                    </div>

                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <ListPostsOfUsers listPosts={this.state.listPosts}
                                          isPostNotFound={this.state.isPostNotFound}
                        />
                    </div>
                </div> 

                <div className="row mb-4">
                    <div className="col-sm-6 col-md-6 col-lg-9">
                        
                    </div>  

                    <div className="col-sm-6 col-md-6 col-lg-2 mt-3">
                        <Link to="/createPost">
                            <button className="btn btn-md btn-success btn-lg" id="btn-create-newPost">Create New Post  <i className="fa fa-file-text-o"></i>  </button>
                        </Link>                      
                    </div>  

                </div>  

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <Footer />
                    </div>   
                </div>          
            </div>
        );
    }
}
export default HomePageWrapper;
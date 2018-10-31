import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Panel-New-Post.css';

class PanelPost extends Component {

    constructor(props){

        super(props);

        this.userID = sessionStorage.getItem('loginUsername'); 

        this.listOfUsersInfo = JSON.parse(sessionStorage.getItem('listOfUsers'));

        this.CreateNewPost = this.CreateNewPost.bind(this);

    }

    CreateNewPost(){

        var userToken = sessionStorage.getItem('loginToken');
        var userID = sessionStorage.getItem('loginUserID');

        // Function to make the postID unique
        var postId = function () {
            return '_' + Math.random().toString(36).substr(2, 9);
        };

       // const sender = this.refs.sender.value;
        const recipient = this.refs.recipient.value;
        const postContent = this.refs.textarea.value;

        const url = 'http://api.bowspace.ca/rest/post';

        const data = {
            PostId: postId(),
            SenderId: userID,
            RecipientId: recipient,
            PostHtml: postContent
        }

        const header = new Headers({
            'content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + userToken
        })
      
        fetch(url, {
            headers: header,
            method: 'post',
            mode: 'cors',
            credentials: 'omit',
            body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then((data) => console.log(data))
            .catch(error => console.log('Error:', error))           
    }

    
    render(){

        let listUserNamesInfo = this.listOfUsersInfo;

        return( 

                <div className="container" >                   
                     <div className="row"> 
                        <div className="col-sm-0 col-md-0 col-lg-3">
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-6" id="wrapper-panel">
                            <div className="form-group mb-4  mt-3">
                                <div className="input-group-prepend">
                                    <h3 id="text-panel">BowSpace - create post</h3>
                                    
                                </div>
                            </div>
                            <div className="form-group mb-5">
                                <div className="input-group-prepend">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-buysellads"></i> Sender</span>
                                    </div>
                                    <input className="form-control" ref="sender" value={this.userID} readOnly></input>
                                </div>
                            </div>

                            <div className="form-group mb-5">
                                <div className="input-group-prepend">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-user-plus"></i> Receipient</span>
                                    </div>
                                    <select className="form-control" ref="recipient" required>
                                        {
                                            (listUserNamesInfo) ? 
                                                listUserNamesInfo.map(
                                                    (userName, index) => {
                                                        return <option key={index} 
                                                                    value={userName.UserId}>
                                                                    {userName.UserName}
                                                                </option>
                                                    }
                                                ) : null
                                        }
                                    </select>
                                </div> 
                            </div>

                            <div className="input-group mb-5">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-comments"></i>Post content</span>
                                </div>
                                <textarea ref="textarea" className="form-control" aria-label="With textarea" id="textarea" required></textarea>
                            </div>

                            
                            <Link to="/home">
                                <button onClick={this.CreateNewPost} type="submit" className="btn btn-success btn-sm" id="btn-post">Post <i className="fa fa-spinner" aria-hidden="true"></i></button>
                            </Link>
                            <Link to="/home">
                                <button className="btn btn-danger btn-sm ml-2" id="btn-cancel">Cancel <i className="fa fa-arrow-circle-left" aria-hidden="true"></i></button>       
                            </Link>                         
                        </div>

                        <div className="col-sm-0 col-md-0 col-lg-3">
                        </div>
                        
                    </div>
                    
            </div>
            
        );
    }
}

export default PanelPost;
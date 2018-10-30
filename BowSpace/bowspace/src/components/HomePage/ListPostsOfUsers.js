import React from 'react';
import UserPostPanel from './UserPostPanel.js';
import Scroll from './Scroll.js';
import ErrorMessage from '../ErrorMessage/ErrorMessage.js';

const ListPostsOfUsers = (props) => {

    const listPosts = props.listPosts;
    const isPostNotFound = props.isPostNotFound;
    const errorMessage = (isPostNotFound) ? <ErrorMessage>Post not found</ErrorMessage>
                                          : null;
    return(
        <div id="list-posts-of-users">

            {errorMessage} 
            
            <Scroll height="700px">
                {
                    listPosts.map(
                        (post, index) => {
                            return <UserPostPanel key={index}
                                                  postId={post.PostId}
                                                  time={post.ValidFromUtc}
                                                  message={post.PostHtml}/>
                        }
                    )
                }
            </Scroll>            
        </div>
    );
}
export default ListPostsOfUsers;
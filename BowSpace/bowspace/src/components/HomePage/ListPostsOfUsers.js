import React from 'react';
import UserPostPanel from './UserPostPanel.js';
import Scroll from './Scroll.js';

const ListPostsOfUsers = (props) => {

    const listPosts = props.listPosts;
    return(
        <div id="list-posts-of-users">
            <Scroll>
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
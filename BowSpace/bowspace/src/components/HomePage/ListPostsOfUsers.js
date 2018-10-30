import React from 'react';
import UserPostPanel from './UserPostPanel.js';
import Scroll from './Scroll.js';
import ErrorMessage from '../ErrorMessage/ErrorMessage.js';

const convertIdToName = (id) => {

    const listOfUsers = JSON.parse(sessionStorage.getItem('listOfUsers'));

    if (listOfUsers) {
        
        for (let i = 0; i < listOfUsers.length; i++) {

            if (listOfUsers[i].UserId === id) {

                return listOfUsers[i].UserName;
            }
        }
    }  

}

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
                            const recipientName = convertIdToName(post.RecipientId);
                            const senderName = convertIdToName(post.SenderId);
                            return <UserPostPanel key={index}
                                                  postId={post.PostId}
                                                  time={post.ValidFromUtc}
                                                  message={post.PostHtml}
                                                  recipientName={recipientName}
                                                  senderName={senderName}
                                                  />
                        }
                    )
                }
            </Scroll>            
        </div>
    );
}
export default ListPostsOfUsers;
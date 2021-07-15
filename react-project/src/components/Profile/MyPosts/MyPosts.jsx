import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 2, message: 'Blabla', likesCount: 11},
        {id: 2, message: 'Dada', likesCount: 11}
    ]

<<<<<<< HEAD
    let postsElements =
        posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);
=======
    let postsElements = 
    posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);
>>>>>>> 1c3bd7f54a8fccdc8af10b4728852d91259d2874

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;
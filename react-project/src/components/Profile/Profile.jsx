import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
        <div>
            <img src="https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=6&m=825383494&s=612x612&w=0&h=pamh6qxyNPCnNAVru4BrAHt2qTHAGCD9lDiN_6MbaNY=" alt=""/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
    )
}

export default Profile;
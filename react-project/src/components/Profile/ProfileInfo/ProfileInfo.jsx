import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.imageWrapper}>
                <img
                    src="https://www.travoinspire.com/wp-content/uploads/2020/05/meeting-banner-1024x341-1.jpg"/>
            </div>
            <div className={classes.descriptionBlock}>
                <h2>Erlan</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit a itaque expedita magni sed laudantium blanditiis ipsam voluptates, nostrum incidunt porro fuga perspiciatis nesciunt neque facilis modi consectetur, iste id?</p>
            </div>
        </div>
    )
}

export default ProfileInfo;
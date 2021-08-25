import React from 'react';
import classes from './ProfileInfo.module.css';
import Mainpic from '../../../mainpic.jpg';

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.imageWrapper}>
                <img src={Mainpic} />
            </div>
            <div className={classes.descriptionBlock}>
                <h2>Erlan</h2>
                <h4>A bad workman quarrels with his tools.</h4>
            </div>
        </div>
    )
}

export default ProfileInfo;
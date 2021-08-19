import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.imageWrapper}>
                {/*<img*/}
                {/*    src="https://www.insight.com/content/dam/insight-web/sitesections/careers/corporate-jobs-at-insight.jpg"/>*/}
            </div>
            <div className={classes.descriptionBlock}>
                <h2>James Bond</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit a itaque expedita magni sed laudantium blanditiis ipsam voluptates, nostrum incidunt porro fuga perspiciatis nesciunt neque facilis modi consectetur, iste id?</p>
            </div>
        </div>
    )
}

export default ProfileInfo;
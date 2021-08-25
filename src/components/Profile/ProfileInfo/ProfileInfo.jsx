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
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
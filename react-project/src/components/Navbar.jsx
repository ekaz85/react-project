import React from 'react';
import classes from './Navbar.module.css';

let c1 = 'item';
let c2 = 'active';
let classAct = c1 + " " + c2;
let classActNew = `${classes.item} ${c2}`;

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <a>Profile</a>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
            <a>Message</a>
        </div>
        <div className={classes.item}>
            <a>News</a>
        </div>
        <div className={classes.item}>
            <a>Music</a>
        </div>
        <div className={classes.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;
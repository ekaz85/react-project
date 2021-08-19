import React from 'react';
import classes from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.upperheader}>
                {/* <img src="https://cdn.dribbble.com/users/13604/screenshots/7557893/image.png?compress=1&resize=400x300" alt=""/> */}
                <h1>Teammates</h1>
            </div>
            <div className={classes.lowerheader}>
                    <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
                    <NavLink to="/dialogs" activeClassName={classes.activeLink}>Message</NavLink>
                    <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
                    <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
                    <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
        </header>
    );
}

export default Header;

 {/* <img src="https://cdn.dribbble.com/users/13604/screenshots/7557893/image.png?compress=1&resize=400x300" alt=""/> */}
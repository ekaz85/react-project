import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
                <img src="https://cdn.dribbble.com/users/13604/screenshots/7557893/image.png?compress=1&resize=400x300" alt=""/>
                        <ul>
                            <li><a href="#"><i className="fa">Menu</i></a></li>
                            <li><a href="#"><i className="fa">Projects</i></a></li>
                            <li><a href="#"><i className="fa">About Us</i></a></li>
                            <li><a href="#"><i className="fa">Gallery</i></a></li>
                            <li><a href="#"><i className="fa">Contacts</i></a></li>
                        </ul>
        </header>
    );
}

export default Header;
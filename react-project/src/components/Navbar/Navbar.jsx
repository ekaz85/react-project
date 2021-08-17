import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import anime from 'animejs/lib/anime.es.js';

// const container = document.querySelector('#container');
// for (var i = 1; i <= 100; i++) {
//     const blocks = document.createElement('div');
//     blocks.classList.add('block');
//     container.appendChild(blocks);
// }
// console.log(container);

//
// function generate() {
//     anime({
//         targets: '.block',
//         translateX: function () {
//             return anime.random(-700, 700)
//         },
//         translateY: function () {
//             return anime.random(-700, 700)
//         },
//         scale: function () {
//             return anime.random(1, 5)
//         }
//     })
// }
// heeey

// generate();

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.container = React.createRef();
    }
    render() {
        const node = this.container.current;
        console.log(node);

        return <nav className={classes.nav} ref={this.container}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>Message</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
        </nav>
    }
}

export default Navbar;
import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import anime from 'animejs/lib/anime.es.js';

const Navbar = () => {

  const generate = () => {
    const container = document.querySelector('#container');
    for (var i = 1; i <= 100; i++) {
      const blocks = document.createElement('div');
      blocks.classList.add(classes.block);
      container.appendChild(blocks);
    }
    anime({
      targets: '.block',
      translateX: function () {
        return anime.random(-700, 700)
      },
      translateY: function () {
        return anime.random(-700, 700)
      },
      scale: function () {
        return anime.random(1, 5)
      }
    })
  }

  return (
    <nav className={classes.nav} id="container">

      {/* <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.activeLink} onClick={generate}>Profile</NavLink>
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
      </div> */}
    </nav>)

}

export default Navbar;
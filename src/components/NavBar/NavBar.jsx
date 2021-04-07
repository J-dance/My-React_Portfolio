import React from 'react'
import styles from "./NavBar.module.scss";
import { HashLink as Link } from 'react-router-hash-link';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/" className={styles.link}><h3>LOGO</h3></Link>
      </div>
      <ul>
        <Link to='/home' className={styles.link} ><li>HOME</li></Link>
        <Link to="/home#aboutSecion" className={styles.link}><li>ABOUT</li></Link>
        <Link to='/projects' className={styles.link}><li>PROJECTS</li></Link>
        <Link to='/contact' className={styles.link}><li>CONTACT</li></Link>
      </ul>
    </div>
  )
}

export default NavBar;

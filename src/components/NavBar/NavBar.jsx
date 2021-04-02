import React from 'react'
import styles from "./NavBar.module.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <h3 className={styles.logo} >LOGO</h3>
      <ul>
        <Link to='/' className={styles.link} ><li>HOME</li></Link>
        <Link to='/about' className={styles.link}><li>ABOUT</li></Link>
        <Link to='/projects' className={styles.link}><li>PROJECTS</li></Link>
        <Link to='/contact' className={styles.link}><li>CONTACT</li></Link>
      </ul>
    </div>
  )
}

export default NavBar;

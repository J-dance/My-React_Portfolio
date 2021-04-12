import React from 'react'
import styles from "./NavBar.module.scss";
import { motion } from "framer-motion";
import { HashLink as Link } from 'react-router-hash-link';
import { hoverVariant } from "../../variants";
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
        <Link to='/home' className={styles.link} ><motion.li
        variants={hoverVariant}
        whileHover='whileHover'
        >HOME</motion.li></Link>
        <Link to="/home#aboutSecion" className={styles.link}><motion.li
        variants={hoverVariant}
        whileHover='whileHover'
        >ABOUT</motion.li></Link>
        <Link to='/projects' className={styles.link}><motion.li
        variants={hoverVariant}
        whileHover='whileHover'
        >PROJECTS</motion.li></Link>
        <Link to='/contact' className={styles.link}><motion.li
        variants={hoverVariant}
        whileHover='whileHover'
        >CONTACT</motion.li></Link>
      </ul>
    </div>
  )
}

export default NavBar;

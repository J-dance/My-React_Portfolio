import React, { useState, useEffect} from 'react'
import styles from "./NavBar.module.scss";
import { motion } from "framer-motion";
import { HashLink as Link } from 'react-router-hash-link';
import { hoverVariant, navMenuVariant } from "../../variants";
import Logo from "../../assets/SVGs/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(true);

  // on page load
  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 480) {
      setIsOpen(false);
    }
  }, [])

  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/" className={styles.link}><img src={Logo}></img></Link>
      </div>
      {
        isOpen &&
          <motion.ul
          variants={navMenuVariant}
          initial="initial"
          animate="animate"
          exit='exit'
          transition={{duration: 1, ease: 'easeInOut'}}
          >
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
        </motion.ul>
      }
      <div className={styles.menu} onClick={() => setIsOpen(!isOpen)}
>
        {
          isOpen ? <FontAwesomeIcon className={styles.icon} icon={faTimes} /> : <FontAwesomeIcon className={styles.icon} icon={faBars} />
        }
      </div>

    </div>
  )
}

export default NavBar;

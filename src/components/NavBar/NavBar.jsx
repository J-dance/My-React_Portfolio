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
    <div className={isOpen ? `${styles.nav} ${styles.bigHeight}`:`${styles.nav}` }>
      <div className={isOpen ? `${styles.invisible} ${styles.logo}`: styles.logo}>
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
          <li >
            <Link to='/home' className={styles.link} >HOME</Link>
          </li>
          <li>
            <Link to="/home#aboutSection" className={styles.link}>ABOUT</Link>
          </li>
          <li>
            <Link to='/projects' className={styles.link}>PROJECTS</Link>
          </li>
          <li>
            <Link to='/contact' className={styles.link}>CONTACT</Link>
          </li>
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

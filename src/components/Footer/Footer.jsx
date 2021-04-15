import React from 'react'
import styles from "./Footer.module.scss";
import Logo from "../../assets/SVGs/logo.svg";
import github from "../../assets/SVGs/github-svgrepo-com.svg";
import linkedin from "../../assets/SVGs/linkedin-svgrepo-com.svg";



const Footer = () => {
  return (
    <footer>
    <img className={styles.logo} src={Logo}></img>
    <a href="https://github.com/J-dance?tab=repositories" target="_blank">
      <img className={styles.icon} src={github}></img>
    </a>
    <a href="https://www.linkedin.com/in/jojo-dance/" target="_blank">
      <img className={styles.icon} src={linkedin}></img>
    </a>
    <p>Jojo Dance | 2021</p>
    </footer>
  )
}

export default Footer

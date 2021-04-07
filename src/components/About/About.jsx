import React from 'react'
import styles from "./About.module.scss";
import NavBar from "../NavBar";
import { motion } from "framer-motion";
import { componentTransition } from "../../variants";
import profilePic from "../../assets/images/profile.JPG"

function About() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>ABOUT</h1>
      <section className={styles.aboutText}>
        <div className={`${styles.blankBoxLeft} ${styles.blankBox}`}>
          <p>I am a Brighton born and Bristol based developer with a passion for problem solving, creative thinking and design. I moved to Bristol to study Mechanical engineering back in 2016. It wasn't until a global pandemic happened that I really fell in love with programming. I completed _nology's 12-week intensive web-development course and from day 1 I was hooked. </p>
        </div>
        <img src={profilePic} alt="profile picture"></img>
      </section>
      <section className={styles.aboutText}>
        <div></div>
        <div className={`${styles.blankBoxRight} ${styles.blankBox}`}>
          <p>I really enjoy web-design and creating eye-catching and visually pleasing apps. I am naturally drawn to the backend of things, having developed an engineers mindset from my time at university,  always looking to problem solve!</p>
        </div>
      </section>
      <section className={styles.techContainer}>
        <h2 className={styles.techTitle}>MY TECH</h2>
        <div className={styles.techIconContainer}>
          {/* insert tech stack icons */}
          {/* html5, css3, js es6, React, node.js, Ts, Angular, firebase,  */}

        </div>
      </section>
    </div>
  )
}

export default About;

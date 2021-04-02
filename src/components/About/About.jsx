import React from 'react'
import styles from "./About.module.scss";
import NavBar from "../NavBar";

function About() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        ABOUT
      </main>
    </div>
  )
}

export default About;

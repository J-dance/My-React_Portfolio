import React from 'react'
import styles from "./About.module.scss";
import NavBar from "../NavBar";
import { motion } from "framer-motion";
import { componentTransition } from "../../variants";

function About() {
  return (
    <motion.div className={styles.page}
      variants={componentTransition}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <NavBar />
      <main className={styles.main}>
        ABOUT
      </main>
    </motion.div>
  )
}

export default About;

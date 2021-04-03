import React from 'react'
import NavBar from "../NavBar";
import styles from "./Projects.module.scss";
import { motion } from "framer-motion";
import { componentTransition } from "../../variants";

const Projects = () => {
  return (
    <motion.div className={styles.page}
      variants={componentTransition}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <NavBar />
      <main className={styles.main}>
        PROJECTS
      </main>
    </motion.div>
  )
}

export default Projects;

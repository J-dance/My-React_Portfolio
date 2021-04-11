import React from 'react'
import NavBar from "../NavBar";
import styles from "./Projects.module.scss";
import { motion } from "framer-motion";
import { componentTransition, projectCardVariant } from "../../variants";

const Projects = () => {
  return (
    <motion.div className='page'
      variants={componentTransition}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <NavBar />
      <main className={`main ${styles.main}`}>
        <h1 className={styles.title}>PROJECTS</h1>

        {/* projects go in here */}
        <motion.section className={styles.projectContainer}
        initial={{opacity: 1}}
        animate={{
          opacity: 1,
          transition: {staggerChildren: 1}
        }}
        >
          <motion.div className={`${styles.projectTile} ${styles.calc}`}
          variants={componentTransition}
          initial='hidden'
          animate='visible'
          >
            {/* this shows the text on hover and clicking takes you to the website */}
            <motion.div className={styles.tileMotion}
            variants={projectCardVariant}
            whileHover='hover'
            whileTap='hover'
            >
              <h3>MY CALCULATOR</h3>
              <p>This was one of my first JavaScript applications. It is a calculator with basic functionality. Bootstrap was used for styling, tests were used...</p>
            </motion.div>
          </motion.div>

          <motion.div className={`${styles.projectTile} ${styles.game}`}
          variants={componentTransition}
          initial='hidden'
          animate='visible'
          >
            {/* Game*/}
            <motion.div className={styles.tileMotion}
            variants={projectCardVariant}
            whileHover='hover'
            whileTap='hover'
            >
              <h3>MY JS-GAME</h3>
              <p>A grid based game built in javascript...</p>
            </motion.div>
          </motion.div>

          <motion.div className={`${styles.projectTile} ${styles.morse}`}
          variants={componentTransition}
          initial='hidden'
          animate='visible'
          >
            {/* morse code translator*/}
            <motion.div className={styles.tileMotion}
            variants={projectCardVariant}
            whileHover='hover'
            whileTap='hover'
            >
              <h3>MORSE CODE TRANSLATOR</h3>
              <p>Morse code translator, wither english to morse or vice versa...</p>
            </motion.div>
          </motion.div>

          <motion.div className={`${styles.projectTile} ${styles.punk}`}
          variants={componentTransition}
          initial='hidden'
          animate='visible'
          >
            {/* punk ipa*/}
            <motion.div className={styles.tileMotion}
            variants={projectCardVariant}
            whileHover='hover'
            whileTap='hover'
            >
              <h3>PUNK IPA API</h3>
              <p>BUilt a front end for a punk ipa api with search and filter features...</p>
            </motion.div>
          </motion.div>

          <motion.div className={`${styles.projectTile} ${styles.knowaste}`}
          variants={componentTransition}
          initial='hidden'
          animate='visible'
          >
            {/* this shows the text on hover and clicking takes you to the website */}
            <motion.div className={styles.tileMotion}
            variants={projectCardVariant}
            whileHover='hover'
            whileTap='hover'
            >
              <h3>KNO WASTE - CLIENT PROJECT</h3>
              <p>Client project for Kno-waste - Bristol Uni start up, group project for 5 weeks, used React...</p>
            </motion.div>
          </motion.div>
        </motion.section>
        
      </main>
    </motion.div>
  )
}

export default Projects;

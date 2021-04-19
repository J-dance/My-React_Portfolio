import React from 'react'
import NavBar from "../NavBar";
import Footer from "../Footer";
import styles from "./Projects.module.scss";
import { motion } from "framer-motion";
import { componentTransition, projectCardVariant, cloudVariant } from "../../variants";
import { cloudSvg } from "../../assets/SVGs/svgCollection";
import {
  Link
} from "react-router-dom";
// import { Parallax } from 'react-scroll-parallax';


const Projects = () => {

  return (
    <motion.div className={`page ${styles.page}`}
      variants={componentTransition}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <NavBar />
      <main className={`main ${styles.main}`}>
        <div className={styles.leftBackground}>
          <motion.div className={styles.cloudOne}
              variants={cloudVariant}
              initial='initial'
              animate='animate'
              transition={{
                duration: 7.6,
                times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                type: 'spring',
                repeat: Infinity,
                ease: 'linear'
              }}
              >{cloudSvg()}</motion.div>

          <motion.div className={styles.cloudTwo}
              variants={cloudVariant}
              initial='initial'
              animate='animate'
              transition={{
                duration: 8.8,
                times: [0, 0.3, 0.4, 0.6, 0.9, 1],
                type: 'spring',
                repeat: Infinity,
                ease: 'linear'
              }}
              >{cloudSvg()}</motion.div>

          <motion.div className={styles.cloudThree}
              variants={cloudVariant}
              initial='initial'
              animate='animate'
              transition={{
                duration: 10,
                times: [0, 0.1, 0.35, 0.7, 0.85, 1],
                type: 'spring',
                repeat: Infinity,
                ease: 'linear'
              }}
              >{cloudSvg()}</motion.div>

        </div>
        <div className={styles.rightBackground}>
          <div className={styles.sun}></div>
        </div>
        <h1 className={styles.title}>PROJECTS</h1>

        {/* projects go in here */}
        <motion.section className={styles.projectContainer}
        initial={{opacity: 1}}
        animate={{
          opacity: 1,
          transition: {staggerChildren: 1}
        }}
        >
          <a className={styles.a} href="https://j-dance.github.io/My-Calculator/" target="_blank">
            <div className={`${styles.projectTile} ${styles.calc}`}>
              {/* this shows the text on hover and clicking takes you to the website */}
              <motion.div className={styles.tileMotion}
              variants={projectCardVariant}
              whileHover='hover'
              whileTap='hover'
              >
                <h3>MY CALCULATOR</h3>
                <p>My first project integrating HTMl, CSS/SCSS and JavaScript. Designed and built a calculator with basic functionality. I used Bootstrap for styling and used cypress for e2e testing.</p>
              </motion.div>
            </div>
          </a>

          <a href='https://j-dance.github.io/My-Javescript-Game/' target="_blank">
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
                <p>My first game built using JavaScript with HTML and CSS/SCSS. Grid-based game using JavaScript to render the player movement and execute checks on the player when at certain positions.</p>
              </motion.div>
            </motion.div>
          </a>

          <a href="https://j-dance.github.io/Morse-Code-Translator/" target="_blank">
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
                <p>Built an English to morse code and vice versa translator using JavaScript, HTML and CSS/SCSS. Used test driven development to build the functionality of the translator. Used JS framework Jest for unit testing.</p>
              </motion.div>
            </motion.div>
          </a>

          <a href="https://j-dance.github.io/Punk-IPA-API/" target="_blank" >
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
                <p>Built a frontend for an API with a search bar and filter features for the results. Projects built using React.</p>
              </motion.div>
            </motion.div>
          </a>

          <a href="https://knowaste-3c92c.web.app/" target="_blank">
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
                <p>Client project for Bristol-uni start-up knowaste. Built in React using firebase for storage and authentication. App containes a user and admin portal, where users can select and save meal options, view profile information and view a leaderboard of their user stats. Admin can upload meal options and create timetables, as well as calculate totals from all the users data.</p>
              </motion.div>
            </motion.div>
          </a>
        </motion.section>
        
      </main>
      <section className='footer'>
        <Footer />
      </section>
    </motion.div>
  )
}

export default Projects;

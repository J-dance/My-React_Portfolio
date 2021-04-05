import React from 'react';
import { motion } from "framer-motion";
import styles from "./Landing.module.scss";
import { Link } from "react-router-dom";
import { 
  introVariant, 
  componentTransition, 
  hiVariant, 
  nameVariant, 
  aVariant, 
  bristolVariant,
  enterVariant,
  basedVariant,
  softwareVariant,
  developerVariant } from "../../variants";


function Landing() {
  return (
    // component animation on mount and exit
    <motion.div className={styles.landingPage}
      variants={componentTransition}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      {/* main page content */}
      <main className={`main ${styles.main}`}>          
          <motion.div className={styles.container}
            variants={introVariant}
            initial="initial"
            animate="animate"
            transition={{
              duration: 16,
              delay: 2,
              times: [0, 0.06, 0.2, 0.275, 0.35, 0.425, 0.45, 0.52, 0.6, 0.7, 0.8, 0.9, 1]
            }}
          >
            <motion.h2 className={styles.absolute}
              variants={hiVariant}
              initial='hidden'
              animate='visible'
              transition={{
                duration: 4.5,
                delay: 2.2,
                times: [0, 0.2, 0.7, 0.8]
              }}
            >Hi</motion.h2>
            <motion.h2 className={styles.absolute}
              variants={nameVariant}
              initial='hidden'
              animate='visible'
              transition={{
                duration: 3,
                delay: 5.25,
                times: [0, 0.35, 0.8, 1]
              }}
            >i'm Jojo</motion.h2>

            <motion.h2 className={styles.absolute}
              variants={aVariant}
              initial='hidden'
              animate='visible'
              transition={{
                duration: 6,
                delay: 7.5,
                // times: [0, 0.15, 0.2, 0.36, 0.6, 0.8]
                times: [0, 0.2, 0.3, 0.5, 0.7, 0.8]
              }}
            >a</motion.h2>
            <motion.h3 className={styles.absolute}
              variants={bristolVariant}
              initial='hidden'
              animate='visible'
              transition={{
                duration: 2,
                delay: 10.3,
                times: [0, 0.3, 0.65, 1]
              }}
            >Bristol</motion.h3>

            <motion.h3 className={styles.absolute}
              variants={basedVariant}
              initial='hidden'
              animate='visible'
              transition={{
                duration: 1.5,
                delay: 11,
                times: [0, 0.3, 0.4, 1]
              }}
            >based</motion.h3>

            <motion.h2 className={styles.absolute}
              variants={softwareVariant}
              initial='hidden'
              animate='visible'
              transition={{
                duration: 2.5,
                delay: 12.2,
                times: [0, 0.4, 0.8, 1]
              }}
            >software</motion.h2>

            <motion.h2 className={styles.absolute}
              variants={developerVariant}
              initial='hidden'
              animate='visible'
              transition={{
                duration: 1,
                delay: 15.5,
                times: [0, 0.3, 0.6, 1]
              }}
            >Developer.</motion.h2>
          </motion.div>  

          {/* button to home page */}
          <Link to='/home' className={styles.buttonLink}>
            <motion.button className={styles.enterButton}
            variants={enterVariant}
            initial='hidden'
            animate='visible'
            transition={{
              duration: 1,
              delay: 18
              }}
            >ENTER</motion.button>
          </Link>
      </main>
    </motion.div>
  )
}

export default Landing;


import React from 'react';
import { motion } from "framer-motion";
import styles from "./Home.module.scss";
import NavBar from "../NavBar";
import { introVariant, hoverVariant, componentTransition, hiVariant, nameVariant } from "../../variants";


function Home() {
  return (
    <motion.div className={styles.page}
      variants={componentTransition}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <NavBar />
      <header>
        <motion.h1 
          variants={hoverVariant}
          whileHover="whileHover"
        >Hello.</motion.h1>
      </header>
      <main className={styles.main}>          
          <motion.div className={styles.container}
            variants={introVariant}
            initial="initial"
            animate="animate"
            transition={{
              duration: 5,
              delay: 2,
              times: [0, 0.4, 0.7, 1]
            }}
          >
            <motion.h2
              variants={hiVariant}
              initial='hidden'
              animate='visible'
              transition={{
                duration: 3,
                delay: 4,
                times: [0, 0.6, 0.8, 1]
              }}
            >Hi</motion.h2>
            <motion.h2
              variants={nameVariant}
              initial='hidden'
              animate='visible'
              transition={{
                duration: 3,
                delay: 5,
                // times: [0, 0.4, 1]
              }}
            >i'm jojo</motion.h2>
          </motion.div>
      </main>
    </motion.div>
  )
}

export default Home;

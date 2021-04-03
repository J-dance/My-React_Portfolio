import React from 'react';
import { motion } from "framer-motion";
import styles from "./Home.module.scss";
import NavBar from "../NavBar";
import { introVariant, hoverVariant, componentTransition } from "../../variants";


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
        <motion.div
          variants={introVariant}
          initial="initial"
          animate="animate"
          transition={{
            duration: 5,
            delay: 2,
            times: [0, 0.4, 0.7, 1]
          }}
        >
          <div className={styles.container}></div>
        </motion.div>
      </main>
    </motion.div>
  )
}

export default Home;

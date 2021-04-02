import React from 'react';
import { motion } from "framer-motion";
import styles from "./Home.module.scss";
import NavBar from "../NavBar";
import { introVariant, hoverVariant } from "../../variants";


function Home() {
  return (
    <div className={styles.page}>
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
          transition="transition"
        >
          <div className={styles.container}></div>
        </motion.div>
      </main>
    </div>
  )
}

export default Home;

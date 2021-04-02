import React from 'react';
import { motion } from "framer-motion";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.big}>
      <motion.h1>Hello.</motion.h1>
      <motion.div
        initial={{
          opacity: 0,
          scale: 1,
          x: 100,
          y: 100
        }}
        animate={{
          opacity: 1,
          scale: 2,
          x: 0,
          y: 0
        }}
        transition={{
          duration: 0.5
        }}
      >
        <div className={styles.container}>
        
        </div>
      </motion.div>
    </div>
  )
}

export default Home;

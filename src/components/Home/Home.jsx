import React from 'react';
import { motion } from "framer-motion";
import styles from "./Home.module.scss";
import NavBar from "../NavBar";
import { introVariant, hoverVariant, componentTransition, hiVariant, nameVariant } from "../../variants";


function Home() {
  return (
    <motion.div className='page'
      variants={componentTransition}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <NavBar />
      
        {/* <motion.h1 
          variants={hoverVariant}
          whileHover="whileHover"
        >Hello.</motion.h1>
       */}
      <main className={`main ${styles.main}`}>          
          HOME
      </main>
    </motion.div>
  )
}

export default Home;

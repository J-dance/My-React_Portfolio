import React from 'react';
import { motion } from "framer-motion";
import styles from "./Home.module.scss";
import NavBar from "../NavBar";
import About from "../About";
import Footer from "../Footer";
import { componentTransition, cloudVariant, sunVariant } from "../../variants";
import { cloudSvg } from "../../assets/SVGs/svgCollection";


function Home() {
  return (
    <motion.div className={`page ${styles.page}`}
      variants={componentTransition}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <NavBar />
      
      <main className={`main ${styles.main}`}>  
        <div className={styles.parralaxWrapper}>     
          <div className={styles.homeLanding}>
            <motion.div className={styles.sun}
            variants={sunVariant}
            initial='initial'
            animate='animate'
            whileHover='hover'
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            >
              <h1>JOJO DANCE</h1>
            </motion.div>
            <h1 className={styles.title}>SOFTWARE DEVELOPER</h1>
            <motion.div className={styles.cloudLeft}
            variants={cloudVariant}
            initial='initial'
            animate='animate'
            transition={{
              duration: 8,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              type: 'spring',
              repeat: Infinity,
              ease: 'linear'
            }}
            >{cloudSvg()}</motion.div>
            <motion.div className={styles.cloudRight}
            variants={cloudVariant}
            initial='initial'
            animate='animate'
            transition={{
              duration: 9,
              times: [0, 0.1, 0.35, 0.7, 0.85, 1],
              type: 'spring',
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }}>{cloudSvg()}</motion.div>
            <motion.div className={styles.cloudBottom}
            variants={cloudVariant}
            initial='initial'
            animate='animate'
            transition={{
              duration: 8.5,
              times: [0, 0.3, 0.4, 0.6, 0.9, 1],
              type: 'spring',
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'linear'
            }}>{cloudSvg()}</motion.div>
          </div>
        </div> 
        
        {/* render about section */}
        
        <section className={styles.about} id="aboutSecion">
          <About />
        </section>

      </main>
      <section className={styles.footer}>
        <Footer />
      </section>
    </motion.div>
  )
}

export default Home;




import React from 'react';
import { motion } from "framer-motion";
import styles from "./Home.module.scss";
import NavBar from "../NavBar";
import About from "../About";
import Footer from "../Footer";
import { introVariant, hoverVariant, componentTransition, hiVariant, nameVariant } from "../../variants";
import { cloudSvg } from "../../assets/SVG's/svgCollection";

function Home() {
  return (
    <motion.div className={`page ${styles.page}`}
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
          <div className={styles.homeLanding}>
            <div className={styles.sun}>
              <h1>JOJO DANCE</h1>
            </div>
            <h1 className={styles.title}>SOFTWARE DEVELOPER</h1>
            <div className={styles.cloudLeft}>{cloudSvg()}</div>
            <div className={styles.cloudRight}>{cloudSvg()}</div>
            <div className={styles.cloudBottom}>{cloudSvg()}</div>
          </div>
          
          {/* render about section */}
          
          <section className={styles.about}>
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




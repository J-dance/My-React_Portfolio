import React from 'react'
import styles from './Contact.module.scss';
import NavBar from "../NavBar";
import { motion } from "framer-motion";
import { componentTransition } from "../../variants";

function Contact() {
  return (
    <motion.div className={styles.page}
      variants={componentTransition}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <NavBar />
      <main className={styles.main}>
        CONTACT
      </main>
    </motion.div>
  )
}

export default Contact;

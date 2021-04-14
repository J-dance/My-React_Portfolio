import React from 'react'
import styles from './Contact.module.scss';
import NavBar from "../NavBar";
import { motion } from "framer-motion";
import { componentTransition, hoverVariant } from "../../variants";
import emailjs from 'emailjs-com';
import { service_id, template_id, user_id} from "../../emailjs";
function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(service_id, template_id, e.target, user_id)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <motion.div className='page'
      variants={componentTransition}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <NavBar />
      <main className={`mainz ${styles.main}`}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>CONTACT</h1>
        </div>
        <form className={styles.contactForm} onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <motion.input className={styles.submit} type="submit" value="SEND" 
          variants={hoverVariant}
          whileHover='whileHover'
          />
        </form>
      </main>
    </motion.div>
  )
}

export default Contact;

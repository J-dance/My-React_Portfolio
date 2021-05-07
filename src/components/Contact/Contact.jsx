import React from 'react'
import styles from './Contact.module.scss';
import NavBar from "../NavBar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import socialSVG from '../../assets/SVGs/social.svg';
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
      <main className={`main ${styles.main}`}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>CONTACT</h1>
          <div className={styles.titleText}>
            <p>If you like my work and fancy working together, say hi and leave a message!</p>
            <img src={socialSVG} />
          </div>
        </div>
        <form className={styles.contactForm} onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" placeholder="Please type your message here..."/>
          <motion.input className={styles.submit} type="submit" value="SEND" 
          variants={hoverVariant}
          whileHover='whileHover'
          />
        </form>
      </main>

      <section className='footer'>
        <Footer />
      </section>
    </motion.div>
  )
}

export default Contact;

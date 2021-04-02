import React from 'react'
import styles from './Contact.module.scss';
import NavBar from "../NavBar";

function Contact() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        CONTACT
      </main>
    </div>
  )
}

export default Contact;

import React from 'react'
import NavBar from "../NavBar";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        PROJECTS
      </main>
    </div>
  )
}

export default Projects;

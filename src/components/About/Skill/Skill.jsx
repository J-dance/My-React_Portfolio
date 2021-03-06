import React from 'react'
import styles from './Skill.module.scss'

const Skill = (props) => {
  const {image, name, projects, links} = props;
  return (
    <div className={name == "Testing" ? styles.skill: `${styles.skill} ${styles.underline}`}>
      <img src={image}></img>

      <section className={styles.content}>
        <h1>{name}</h1>
        <h3>Projects:</h3>
        <ul>
          {
            projects.map((project, index) => {
              return (
                <li>
                  <a href={links[index]} target="_blank">{project}</a>
                </li>
              )
            })
          }
        </ul>
      </section>

      
    </div>
  )
}

export default Skill

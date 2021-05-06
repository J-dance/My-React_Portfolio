import React, { useState } from 'react'
import styles from './Project_tile.module.scss'

const Project_tile = (props) => {
  // Deconstruct props: title, description, [tech icons..]
  const {title, text, tech, image, link} = props;
  const imageStyle = {
    backgroundImage: 'url(' + image + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };
  
  const [isHover, setHover] = useState(false);

  return (
    <div className={isHover ? `${styles.project} ${styles.orange_border}` : styles.project} onClick={() => setHover(!isHover)}>
      {/* show main normally without text */}
      <main style={imageStyle} className={styles.main}>
        <div className={styles.cover}></div>
        <h1 className={styles.title} >{title}</h1>
        <div className={styles.icon_container}>
          {
            tech.map(icon => {
              return (
                <img className={styles.icon} src={icon}></img>
              )
            })
          }
        </div>
      </main> 
      {
        isHover ? 
          <section className={styles.text}>
          <p>{text}</p>
          <a href={link} target="_blank"><p>Check it out!</p></a>
          </section> : <></>
      } 
    </div>
  )
}

export default Project_tile

import React from 'react'
import NavBar from "../NavBar";
import Footer from "../Footer";
import styles from "./Projects.module.scss";
import { motion } from "framer-motion";
import { componentTransition, projectCardVariant, cloudVariant } from "../../variants";
import { cloudSvg } from "../../assets/SVGs/svgCollection";
import {
  Link
} from "react-router-dom";
import Project_tile from './project_tile/Project_tile';
import jsSVG from '../../assets/SVGs/js.svg';
import cssSVG from '../../assets/SVGs/css3.svg';
import htmlSVG from '../../assets/SVGs/html5.svg';
import reactSVG from '../../assets/SVGs/react.svg';
import firebaseSVG from '../../assets/SVGs/firebase.svg';
import sassSVG from '../../assets/SVGs/sass.svg';
import game_image from '../../assets/images/game_scrnshot.jpeg';
import calc_image from '../../assets/images/calc_scrnshot.png';
import knowaste_image from '../../assets/images/knowaste.png';
import morse_code_image from '../../assets/images/morse_scrnshot.png';
import punk_image from '../../assets/images/punk.png';


const Projects = () => {

  return (
    <motion.div className={`page ${styles.page}`}
      variants={componentTransition}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <NavBar />
      <main className={`main ${styles.main}`}>
        <div className={styles.main_background}>
          <h1 className={styles.title}>PROJECTS</h1>

          <section className={styles.projectContainer}>
            <div className={styles.sun}></div>
            {/* insert projects here */}
            <Project_tile title="CALCULATOR" text="My first project integrating HTMl, CSS/SCSS and JavaScript. I designed and built a calculator with basic functionality and multiple displays, using Bootstrap to help style and Cypress for e2e testing." tech={[jsSVG, htmlSVG, cssSVG]} image={calc_image} link="https://j-dance.github.io/My-Calculator/"/>

            <Project_tile title="GAME" text="My first game built using JavaScript with HTML and CSS/SCSS. Multi-level grid-based game using JavaScript to render the players movements and execute checks on the player when at certain positions. < Availaible on mobile soon >" tech={[jsSVG, htmlSVG, cssSVG]} image={game_image} link="https://j-dance.github.io/My-Javescript-Game/"/>

            <Project_tile title="KNOWASTE" text="Client project for Bristol-uni start-up KnoWaste. Built in React using Firebase for user storage and authentication. App containes a user and admin portal, where users can select and save meal options, view profile information and view a leaderboard of their user stats. Admin can upload meal options and create timetables, as well as calculate totals from all the users data." tech={[reactSVG, jsSVG, htmlSVG, sassSVG, firebaseSVG]} image={knowaste_image} link="https://knowaste-3c92c.web.app/"/>

            <Project_tile title="PUNK IPA API" text="Built a frontend for an API with a search bar and filter feature for the results." tech={[reactSVG, jsSVG, htmlSVG, sassSVG]} image={punk_image} link="https://punk-api-c0095.web.app/"/>

            <Project_tile title="MORSE TRANSLATOR" text="Built an english to morse code and vice versa translator using JavaScript, HTML and CSS/SCSS. Used test driven development to build the functionality of the translator. Used Jest for unit testing." tech={[jsSVG, htmlSVG, sassSVG]} image={morse_code_image} link="https://j-dance.github.io/Morse-Code-Translator/"/>

          </section>
        </div>
      </main>
      <section className='footer'>
        <Footer />
      </section>
    </motion.div>
  )
}

export default Projects;

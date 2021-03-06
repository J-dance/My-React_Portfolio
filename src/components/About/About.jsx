import React from 'react'
import styles from "./About.module.scss";
import NavBar from "../NavBar";
import Skill from './Skill/index';
import profilePic from "../../assets/images/profile.JPG";
import web_design from '../../assets/SVGs/web_design.svg';
import htmlSVG from "../../assets/SVGs/html5.svg";
import cssSVG from "../../assets/SVGs/css3.svg";
import jsSVG from "../../assets/SVGs/js.svg";
import reactSVG from "../../assets/SVGs/react.svg";
import nodeSVG from "../../assets/SVGs/node.svg";
import tsSVG from "../../assets/SVGs/ts.svg";
import sassSVG from '../../assets/SVGs/sass.svg';
import angularSVG from '../../assets/SVGs/angular.svg';
import nextSVG from '../../assets/SVGs/next.svg';
import mongodbSVG from '../../assets/SVGs/mongodb.svg';
import firebaseSVG from '../../assets/SVGs/firebase.svg';
import testSVG from '../../assets/SVGs/testing.svg';
import gitSVG from '../../assets/SVGs/github-svgrepo-com.svg';
import graduation from "../../assets/SVGs/graduation.svg";
import Pdf from '../../assets/pdfs/cv.pdf';

function About() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>ABOUT</h1>
      <div className={styles.profile_container}>
        <div className={styles.profile_container_round}>
          <img class={styles.profileImage} src={profilePic} alt="profile picture"></img>
        </div>
      </div>
      <section className={styles.aboutText}>
        <div className={`${styles.blankBoxLeft} ${styles.blankBox}`}>
          <p>I am a Bristol based developer with a passion for problem solving, creative thinking and design. I moved to Bristol to study Mechanical engineering back in 2016. It wasn't until a global pandemic happened that I really fell in love with programming. I completed _nology's 12-week intensive web-development course and from day 1 I was hooked. </p>
        </div>
      </section>
      <img className={styles.svg_grad} src={graduation}></img>
      <section className={`${styles.aboutText} ${styles.aboutTextRight}`}>
        <div className={`${styles.blankBoxRight} ${styles.blankBox}`}>
          <p>I really enjoy web-design and creating eye-catching and visually pleasing apps. I am also naturally drawn to the backend of things, having developed an engineers mindset from my time at university.</p>
        </div>
      </section>
      <img className={styles.svg} src={web_design}></img>

      <section className={styles.break}></section>

      {/* skills section */}
      <section className={styles.tech_background}>
        <section className={styles.techContainer}>
          <h2 className={styles.techTitle}>MY TECH</h2>
          <div className={styles.techIconContainer}>
            
            {/* JS */}
            <Skill image={jsSVG} name="JavaScript ES6+" projects={["JS Game", "Punk IPA API"]} links={["https://github.com/J-dance/My-Javescript-Game", "https://github.com/J-dance/Punk-IPA-API"]}/>
           
            {/* HTML */}
            <Skill image={htmlSVG} name="HTML 5" projects={["Calculator", "Morse Code Translator"]} links={["https://github.com/J-dance/My-Calculator", "https://github.com/J-dance/Morse-Code-Translator"]}/>

            {/* CSS */}
            <Skill image={cssSVG} name="CSS 3" projects={["Calculator", "Punk IPA API"]} links={["https://github.com/J-dance/My-Calculator", "https://github.com/J-dance/Punk-IPA-API"]}/>

            {/* React */}
            <Skill image={reactSVG} name="React" projects={["KnoWaste MVP", "This site!"]} links={["https://github.com/J-dance/KnoWaste","https://github.com/J-dance/My-React_Portfolio"]}/>

            {/* node */}
            <Skill image={nodeSVG} name="Node.js" projects={["ArubaChat (..in progress)", "Pubs API (..in progress)"]} links={["https://github.com/J-dance/Aruba-Chat-Rooms", "https://github.com/J-dance/MVC-node-API"]} />

            {/* TS */}
            <Skill image={tsSVG} name="TypeScript" projects={["Pubs API (..in progress)"]} links={["https://github.com/J-dance/MVC-node-API"]} />

            {/* Sass */}
            <Skill image={sassSVG} name="SASS/SCSS" projects={["Calculator", "KnoWaste MVP"]} links={["https://github.com/J-dance/My-Calculator", "https://github.com/J-dance/KnoWaste"]}/>

            {/* Angular */}
            <Skill image={angularSVG} name="Angular" projects={["B??nhG-m?? (..in progress)"]} links={["https://github.com/J-dance/BanhG-mi-app.git"]} />

            {/* Next */}
            <Skill image={nextSVG} name="Next" projects={["Danceability App (..in progress)"]} links={["https://github.com/J-dance/Danceablity-Music-App"]} />

            {/* MongoDb */}
            <Skill image={mongodbSVG} name="MongoDB" projects={["Pubs API (..in progress)"]} links={["https://github.com/J-dance/MVC-node-API"]} />

            {/* firebase */}
            <Skill image={firebaseSVG} name="Firebase" projects={["KnoWaste MVP"]} links={["https://github.com/J-dance/KnoWaste"]} />

            {/* github */}
            <Skill image={gitSVG} name="GitHub" projects={["My repository", "KnoWaste: Agile project with version control"]} links={["https://github.com/J-dance?tab=repositories", "https://github.com/J-dance/KnoWaste"]} />            

            {/* testing */}
            <Skill image={testSVG} name="Testing" projects={["Calculator: e2e testing with Cypress", "Morse Code Translator: unit testing with Jest"]} links={["https://github.com/J-dance/My-Calculator", "https://github.com/J-dance/Morse-Code-Translator"]}/>            

          </div>
          <div className={styles.cv}>
            <a href={Pdf} target="_blank">
              <h1>CV</h1>
            </a>
          </div>
        </section>
      </section>
    </div>
  )
}

export default About;

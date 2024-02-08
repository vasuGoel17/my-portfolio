import "../intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../img/profile.jpg";
// import ME from '../../assets/Rasif Tagizade image.jpg';

const About = () => {
  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h5>Get to know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about__container">
        <div className="about__me" style={{ margin: "auto" }}>
          <div className="about__me-image" style={{ height: "100%" }}>
            <img src={img} alt="Vasu Goel" width="100%" height="100%" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            Greetings! I'm Vasu Goel, an enthusiastic and creative Full Stack
            Developer passionate about crafting immersive digital experiences.
            Throughout my recent months, I've embarked on a remote journey,
            harnessing the power of HTML, CSS, JavaScript, React.js, and Node.js
            to bring to life not only stunning landing pages but also robust
            APIs. Beyond my professional endeavors, I consider myself a
            tenacious problem solver, thriving in the face of challenges. My
            coding journey is marked by significant achievements, including
            securing top positions in prominent coding and development
            hackathons. As a devoted collaborator, I place immense value on
            teamwork, firmly believing that extraordinary outcomes arise from
            the fusion of diverse perspectives. When working within a team, I am
            dedicated to fostering a positive environment that nurtures
            creativity and ignites innovation. Let's create something
            extraordinary together!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
      <hr style={{ marginTop: "3rem" }} />
    </section>
  );
};

export default About;

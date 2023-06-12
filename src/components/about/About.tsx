import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import SchoolIcon from "@mui/icons-material/School";
import TerminalIcon from "@mui/icons-material/Terminal";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <SchoolIcon className="about__icon" />
              <h5>Education</h5>
              <div className="about__info">
                <p>University of Washington</p>
                <p>BS in Computer Science</p>
              </div>
            </article>
            <article className="about__card">
              <TerminalIcon className="about__icon" />
              <h5>Programming languages</h5>
              <div className="about__info">
                <p>Java</p>
                <p>JavaScript</p>
                <p>Python</p>
              </div>
            </article>
            <article className="about__card">
              <SavedSearchIcon className="about__icon" />
              <h5>Interests</h5>
              <div className="about__info">
                <p>FullStack</p>
                <p>Artificial Intelligence</p>
                <p>BlockChain</p>
              </div>
            </article>
          </div>
          <div className="about__intro">
            <p>
              👋 Hello, I'm <strong>Jongseok</strong>!
            </p>
            <p>
              🎓 Graduated from the{" "}
              <strong>University of Washington Bothell</strong> with a Bachelor
              of Science degree in{" "}
              <strong>Computer Science & Software Engineering</strong>.
            </p>
            <p>
              🌱 Constantly learning and exploring{" "}
              <strong>Artificial Intelligence</strong> and{" "}
              <strong>BlockChain</strong> to stay ahead in the ever-evolving
              world of software development.
            </p>
            <p>
              📫 Feel free to connect with me and explore some of my projects!
              Let's collaborate and build something amazing together!
            </p>
          </div>

          <a href="#contact" className="btn btn-primary">
            Let's connect!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

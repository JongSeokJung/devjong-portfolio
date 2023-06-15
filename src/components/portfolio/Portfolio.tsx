import React from "react";
import "./portfolio.css";
import P1 from "../../assets/portfolio1.png";
import P2 from "../../assets/portfolio2.png";
import P3 from "../../assets/portfolio3.png";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <a
            href="https://github.com/poul0315/Emoji-GPT"
            target="_blank"
            rel="noreferrer"
          >
            <div className="portfolio__item-image">
              <img src={P1} alt="Caption2Emoji" />
            </div>
          </a>
          <div className="portfolio__item-info">
            <h2>Caption2Emoji</h2>
            <h5>TypeScript, Next.JS, OpenAI API</h5>
            <p>
              <strong>Caption2Emoji</strong> is a web application that utilizes
              OpenAI API to instantly transform your text captions into a
              colorful array of emojis. With a click of a button, you can
              effortlessly add a touch of fun, emotion, and personality to your
              messages, social media posts, and more.
            </p>
          </div>
        </article>
        <article className="portfolio__item">
          <a
            href="https://github.com/JongSeokJung/wordle-clone"
            target="_blank"
            rel="noreferrer"
          >
            <div className="portfolio__item-image">
              <img src={P2} alt="Wordle" />
            </div>
          </a>
          <div className="portfolio__item-info">
            <h2>Wordle Clone</h2>
            <h5>JavaScript, express.js, Random Words API, Twinword API</h5>
            <p>
              <strong>Wordle Clone</strong> is a fun word-guessing game where
              players try to guess a five-letter word within a limited number of
              attempts. This application is inspired by the popular game called
              Wordle. With this application, you can test your vocabulary skills
              and have an enjoyable gaming experience.
            </p>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={P3} alt="Mukja" />
          </div>
          <div className="portfolio__item-info">
            <h2>Mukja</h2>
            <h5>Swift, SwiftUI, Firebase</h5>
            <p>
              <strong>Mukja</strong> is an iOS application that encourages
              university students who live on or off campus to cook by
              suggesting recipes. Users can update their ingredients and the
              application will suggest recipes based on the users' ingredients{" "}
            </p>
          </div>
        </article>
      </div>
      <div className="mobile__scroll">
        <p>Scroll horizontally to see more</p>
      </div>
    </section>
  );
};

export default Portfolio;

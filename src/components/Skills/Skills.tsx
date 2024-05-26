import ScrollAnimation from "react-animate-on-scroll";
import { Container } from './styles';
import Lottie from "lottie-react";
import codingPerson from "../assets/images/codingPerson.json";
import htmlIcon from "../assets/svgImages/html-icon.svg";
import cssIcon from "../assets/svgImages/css-icon.svg";
import jsIcon from "../assets/svgImages/js-icon.svg";
import nodeIcon from "../assets/svgImages/node-icon.svg";
import reactIcon from "../assets/svgImages/react-icon.svg";
import boostrapIcon from "../assets/svgImages/bootstrap-icon.svg";
import taiwindCSS from "../assets/svgImages/tailwindcss-icon-svgrepo-com.svg";
import mongoDB from "../assets/svgImages/mongodb-svgrepo-com.svg";
import postMan from "../assets/svgImages/postman-icon-svgrepo-com.svg";
import redux from "../assets/svgImages/redux-svgrepo-com.svg";
import github from "../assets/svgImages/github-142-svgrepo-com.svg";
import express from "../assets/svgImages/express-svgrepo-com.svg";
import sql from "../assets/svgImages/mysql-icon.svg";

export function Skills() {
  return (
    <Container id="skills">
      <div className="skills-image">
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <Lottie animationData={codingPerson} />
        </ScrollAnimation>
      </div>
      <div className="skills-text">
        <ScrollAnimation animateIn="fadeInRight" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Ambika, a Frontend developer with a passion for
            creating custom webapps, With a skill set including HTML, CSS,
            JavaScript, and React,and other Libraries and Frameworks, I have the
            tools to bring any website vision to life.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={reactIcon} alt="ReactJS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={taiwindCSS} alt="TailwindCSS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={redux} alt="Redux" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={postMan} alt="PostMan" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={express} alt="ExpressJS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={github} alt="Github" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={mongoDB} alt="MongoDB" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={sql} alt="MySQL" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </Container>
  );
}

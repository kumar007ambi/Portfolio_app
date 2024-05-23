// import Lottie from "lottie-react";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
// import codingPerson from "../assets/images/codingPerson.json";
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";
// import { RiJavascriptFill } from "react-icons/ri";
// import { FaReact } from "react-icons/fa";
// import { FaBootstrap } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { FaGitAlt } from "react-icons/fa";
// // import { FaGithub } from "react-icons/fa";
// import { DiMysql } from "react-icons/di";
// import { FaNodeJs } from "react-icons/fa";
// import { SiMongodb } from "react-icons/si";
// import { SiPostman } from "react-icons/si";
// import { SiRedux } from "react-icons/si";
import { Container } from "./styles";

import codingPerson from "../assets/images/codingPerson.json"
import htmlIcon from "../assets/svgImages/html-icon.svg";
import cssIcon from "../assets/svgImages/css-icon.svg";
import jsIcon from "../assets/svgImages/js-icon.svg";
import nodeIcon from "../assets/svgImages/node-icon.svg";
import reactIcon from "../assets/react-icon.svg";
// import typescriptIcon from "../assets/svgImages/typescript-icon.svg";

import boostrapIcon from "../assets/svgImages/bootstrap-icon.svg";

export function Skills(){
  return (
    <Container id="skills">
    <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={codingPerson} alt="" />
        </ScrollAnimation>
      </div>
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Vinayak, a website developer with a passion for creating custom online experiences for my clients. With a skill set including HTML, CSS, JavaScript, and React, I have the tools to bring any website vision to life.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            But my services go beyond just custom development - I'm also proficient in using CMS systems like WordPress and Shopify, making it easy for my clients to take control of their own websites and keep them up to date.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            So if you're in need of a new website or just looking to revamp your current online presence, I'd love to chat and see how I can help. Let's bring your website dreams to reality together!</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            {/* <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation> */}
          </div>
          <div className="hability">
            {/* <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={shopify} alt="shopify" />
            </ScrollAnimation> */}
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              {/* <img src={reactIcon} alt="React" /> */}
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              {/* <img src={typescriptIcon} alt="Typescript" /> */}
            </ScrollAnimation>
          </div>
          <div className="hability">
            {/* <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation> */}
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
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
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      
    </Container>
  );
};

{/* <>
      <div id="skills" className="flex h-[600px]">
        <div className="w-6/12">
          <Lottie animationData={codingPerson} />
        </div>
        <div className=" w-6/12">
          <div className="items-center font-bold">
            <h1 className="p-2 m-2 text-6xl">What I do</h1>
            <h1 className="p-2 m-2 text-4xl text-blue-400">
              FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
            </h1>
          </div>
          <div>
            <ul className="p-2 m-2 items-center flex flex-wrap ">
              <li>
                <FaHtml5 className="text-slate-400 hover:text-slate-800 h-24 w-24" />
              </li>
              <li>
                <FaCss3Alt className="text-slate-400 hover:text-slate-800 h-24 w-24" />
              </li>
              <li>
                <RiJavascriptFill className="text-slate-400 hover:text-slate-800 h-24 w-24" />
              </li>
              <li>
                <FaReact className="text-slate-400 hover:text-slate-800 h-24 w-24" />
              </li>
              <li>
                <FaBootstrap className="text-slate-400 hover:text-slate-800 h-24 w-24" />
              </li>
              <li>
                <RiTailwindCssFill className="text-slate-400 hover:text-slate-800 h-24 w-24" />
              </li>
              <li>
                <FaGitAlt className="text-slate-400 hover:text-slate-800 h-24 w-24" />
              </li>
              <li>
                <SiRedux className="text-slate-400 hover:text-slate-800 h-24 w-24" />
              </li>
              <li>
                <FaNodeJs className="text-slate-400 hover:text-slate-800 h-24 w-24" />
              </li>
              <li>
                <DiMysql className="text-slate-400 hover:text-slate-800 h-24 w-24" />
              </li>
              <li>
                <SiMongodb className="text-slate-400 hover:text-slate-800 h-24 w-24" />
              </li>
              <li>
                <SiPostman className="text-slate-400 hover:text-slate-800  h-24 w-24" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
 */}

import Lottie from "lottie-react";
import React from "react";
import codingPerson from "../components/assets/images/codingPerson.json";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <div className="flex">
        <div className="w-6/12">
          <Lottie animationData={codingPerson} />
        </div>
        <div className=" w-6/12">
          <div>
            <h1>What I do</h1>
            <h1>FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</h1>
          </div>
          <div>
            <ul className="flex flex-wrap">
              <li>
                <FaHtml5 className="h-24 w-24" />
              </li>
              <li>
                <FaCss3Alt className="h-24 w-24" />
              </li>
              <li>
                <RiJavascriptFill className="h-24 w-24" />
              </li>
              <li>
                <FaReact className="h-24 w-24" />
              </li>
              <li>
                <FaBootstrap className="h-24 w-24" />
              </li>
              <li>
                <RiTailwindCssFill className="h-24 w-24" />
              </li>
              <li>
                <FaGitAlt className="h-24 w-24" />
              </li>
              <li>
                <FaGithub className="h-24 w-24" />
              </li>
              <li>
                <FaNodeJs className="h-24 w-24" />
              </li>
              <li>
                <DiMysql className="h-24 w-24" />
              </li>
              <li>
                <SiMongodb className="h-24 w-24" />
              </li>
              <li>
                <SiPostman className="h-24 w-24" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

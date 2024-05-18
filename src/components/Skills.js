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
// import { FaGithub } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiRedux } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <div className="flex">
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
  );
};

export default Skills;

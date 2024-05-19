import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

export function ContactMe() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-center font-bold text-5xl">Contact Me</h1>
        <p className="text-5xl text-red-500 p-2">
          <GiRotaryPhone />
        </p>
      </div>
      <div className="">
        <ul className="flex flex-wrap justify-center m-4 p-4 space-x-4">
          <li>
            <FaGithub className="text-slate-400 hover:text-slate-800 h-24 w-24"/>
          </li>
          <li >
            <FaLinkedin className="text-slate-400 hover:text-slate-800 h-24 w-24"/>
          </li>
          <li >
            <SiGmail className="text-slate-400 hover:text-slate-800 h-24 w-24"/>
          </li>
          <li>
            <FaTwitter className="text-slate-400 hover:text-slate-800 h-24 w-24"/>
          </li>
        </ul>
      </div>
    </>
  );
};


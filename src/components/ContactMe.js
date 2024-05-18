import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

const ContactMe = () => {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-center font-bold text-5xl">Contact Me</h1>
        <p className="text-5xl text-red-600 p-2">
          <GiRotaryPhone />
        </p>
      </div>
      <div className="">
        <ul className="">
          <li>
            <FaGithub />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <SiGmail />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactMe;

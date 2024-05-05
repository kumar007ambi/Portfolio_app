import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex bg-cyan-700 h-24 justify-between">
      <div className="flex text-white items-center">
        <Link to="/">Ambika Kumar Kewat </Link>
      </div>
      <ul className="flex items-center">
        <li className="px-4 text-white">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="px-4 text-white">
          <Link to="/experience">Work Experience</Link>
        </li>
        <li className="px-4 text-white">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="px-4 text-white">
          <Link to="/opensource">Open Source</Link>
        </li>
        <li className="px-4 text-white">
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

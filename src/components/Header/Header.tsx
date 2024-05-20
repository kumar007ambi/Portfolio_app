import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";

export function Header() {
  return (
    <nav className="flex bg-cyan-700 h-20 justify-between sticky top-0">
      <Router>
        <HashLink
          smooth
          to="#greetings"
          className="flex text-white items-center"
        >
          <span>{"<Ambika Kumar "}</span>
          <span>{" Kewat/>"}</span>
        </HashLink>
        <NavHashLink smooth to="#greetings">
          Home
        </NavHashLink>
        <NavHashLink smooth to="#skills">
          Skills
        </NavHashLink>
        <NavHashLink smooth to="#projects">
          Projects
        </NavHashLink>
        <NavHashLink smooth to="#opensource">
          Open Source
        </NavHashLink>
        <NavHashLink smooth to="#contactme">
          Contact Me
        </NavHashLink>
      </Router>
    </nav>
  );
}

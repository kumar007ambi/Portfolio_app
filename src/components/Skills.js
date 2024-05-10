import Lottie from "lottie-react";
import React from "react";
import codingPerson from "../components/assets/images/codingPerson.json";

const Skills = () => {
  return (
    <>
      <div className="flex">
        <div className="">
          <Lottie animationData={codingPerson} />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Skills;

import React from "react";
import Animation from "../assets/images/Animation - 1715094740022.json";
import WaveAnimation from "../assets/images/WaveAnimation - 1715256921577.json";
import Lottie from "lottie-react";
import ContactButton from "../Contact/ContactButton";
import ReseumeButton from "../Contact/ReseumeButton";

export function Greetings() {
  const style = {
    width: 80,
  };
  return (
    <div className="flex ">
      <div className="w-fit  text-5xl m-[25px] p-[70px]">
        <p className="text-6xl">
          Hi all, I'm Ambika
          <span className="inline-block inset-y-0">
            <Lottie style={style} animationData={WaveAnimation} />
          </span>
        </p>
        <p className="text-4xl text-blue-500">
          A passionate Frontend Engineer 🚀 having an experience of building Web
          applications with JavaScript / Reactjs / TailWindCSS / Bootstrap and
          some other cool libraries and frameworks.
        </p>
        <div className="flex text-2xl items-center space-x-8 ">
          <ContactButton />
          <ReseumeButton />
        </div>
      </div>
      <div>
        {/* <div className="w-fit m-[16px] p-[20px]"> */}
        <Lottie animationData={Animation} />
      </div>
    </div>
  );
};



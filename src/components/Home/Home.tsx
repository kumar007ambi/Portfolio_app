 import Animation from "../assets/svgImages/Animation - 1715094740022.gif";
// import WaveAnimation from "../assets/images/WaveAnimation - 1715256921577.json";
// import Lottie from "lottie-react";
// import ContactButton from "../Contact/ContactButton";
// import ReseumeButton from "../Contact/ReseumeButton";
import ScrollAnimation from "react-animate-on-scroll"
import { Container } from "./styles"
import { BrowserRouter } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"
import linkedin from "../assets/svgImages/linkedin.svg"
import Hello from "../assets/svgImages/Hello.gif"
import github from "../assets/svgImages/github.svg"



export function Home() {
 
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h2>Ambika Kumar Kewat</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>A passionate Frontend Engineer 🚀 having an experience of building Web
          applications with JavaScript / Reactjs / TailWindCSS / Bootstrap and
          some other cool libraries and frameworks.</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">2.5 Years of Experience</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Resume</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media"><a
        href="https://www.linkedin.com/in/connect-with-ambika/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/kumar007ambi"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="GitHub" />
        </a>
    
        </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Animation} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}


{/* <div id="home" className="flex h-[400px">
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
          <Lottie animationData={Animation} />
      </div>
    </div> */}
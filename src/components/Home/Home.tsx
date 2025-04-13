import Animation from "../assets/svgImages/Animation - 1715094740022.gif";
import ScrollAnimation from "react-animate-on-scroll";
import { Container } from "./styles";
import linkedin from "../assets/svgImages/linkedin.svg";
import Hello from "../assets/svgImages/Hello.gif";
import github from "../assets/svgImages/github.svg";

export function Home() {
  return (
    <Container id="home">
      <div className="home-text">
        <ScrollAnimation animateIn="fadeInUp">
          <h4>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </h4>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <h2>Ambika Kumar Kewat</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>
            A passionate Frontend Engineer 🚀 having an experience of building
            Web applications with ReactJS / JavaScript / TailWindCSS / Bootstrap
            and some other cool libraries and frameworks.
          </h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p className="small-resume">3.5+ Years of Experience</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.8 * 1000}>
          <a
            href="https://drive.google.com/file/d/1YKT9IotavrRF08UgFDok93ysFVNObFrs/view"
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={1 * 1000}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/ambikakumarkewat/"
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
      <div className="home-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Animation} alt="Ilustração" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}

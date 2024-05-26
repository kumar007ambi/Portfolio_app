import { Container } from './styles';
import reactIcon from '../assets/svgImages/react-icon.svg'
import linkedin from '../assets/svgImages/linkedin.svg'
import githubIcon from '../assets/svgImages/github.svg'
import twitter from "../assets/svgImages/twitter-color-svgrepo-com.svg";


export  function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
          This Portfolio is made with 🚀<img src={reactIcon} alt="React" />
        </p>
      </div>
      <div className="social-media">
        <a
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
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://x.com/kumarambika007"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="GitHub" />
        </a>
      </div>
    </Container>
  )
};



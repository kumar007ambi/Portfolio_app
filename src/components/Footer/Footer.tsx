import { Container } from './styles';
import reactIcon from '../assets/svgImages/react-icon.svg'
import linkedin from '../assets/svgImages/linkedin.svg'
import githubIcon from '../assets/svgImages/github.svg'



export  function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/codevinayak"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/CodeVinayak/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
  
        
        
        
      </div>
    </Container>
  )
};



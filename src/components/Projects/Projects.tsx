import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import github from "../assets/svgImages/github.svg";
import externalLink from "../assets/svgImages/external-link.svg";

export function Projects() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
       <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/kumar007ambi/netflix_gpt"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="Visit site" />
                </a>
                <a
                  href="https://github.com/kumar007ambi/netflix_gpt"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>{" "}
              </div>
            </header>
            <div className="body">
              <h3>Netflix‑MovieSuggestor</h3>
              <p style={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <img
                  src={require("../assets/projectImages/Netflix.PNG")}
                  alt="Netflix_GPT"
                />
              </p>
              <p>
                Developed a Full‑Stack Web Application with the help of Tailwind
                CSS for rapid UI development.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>ReactJS</li> <li>GeminiAI</li> <li>Firebase</li>
                <li>TailwindCSS</li>
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/kumar007ambi/shortest_path_finder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="Visit site" />{" "}
                </a>
                <a
                  href="https://github.com/kumar007ambi/shortest_path_finder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Shortest Path Finder</h3>
              <p style={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <img
                  src={require("../assets/projectImages/Dijkstra.PNG")}
                  alt="Netflix_GPT"
                />
              </p>
              <p>
                Developed a shortest path visualizer using Dijkstra’s algorithm
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ReatcJS</li>
                <li>Dijkstra’s algorithm</li>
                <li>Smooth Animation</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/kumar007ambi/Swiggy_clone"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="Visit site" />
                </a>
                <a
                  href="https://github.com/kumar007ambi/Swiggy_clone"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Swiggy‑Clone</h3>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "10px",
                }}
              >
                {" "}
                <img
                  src={require("../assets/projectImages/Swiggy.PNG")}
                  alt="Netflix_GPT"
                />
              </p>
              <p>Swiggy Clone with the help of Swiggy Live API.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>ReactJS</li>
                <li>Swiggy Live API</li>
                <li>TailwindCSS</li>
                <li>Redux Toolkit</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}

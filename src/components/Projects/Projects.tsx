import React from 'react';
import { Container } from './styles';
import ScrollAnimation from "react-animate-on-scroll";
import github from "../assets/svgImages/github.svg";
import externalLink from "../assets/svgImages/external-link.svg"

const projects = {
  project: [
    {
      projectTitle: "Netflix Movie Suggestor",
      projectlogo: require("../assets/projectImages/Netflix.PNG"),
      desc: "A movie suggestion app, made with the help of React and TaiwindCSS, for movies geminiAI API is integrated for suggestion and login Firebase is used.",
    },
    {
      projectTitle: "Shortest Path Finder",
      projectlogo: require("../assets/projectImages/Dijkstra.PNG"),
      desc: "Shortest Path Finder with the help if Dijkstra's algorithm, made it with the help of react library,used noramal css for styling and normal js functions.",
    },
    {
      projectTitle: "Swiggy Clone",
      projectlogo: require("../assets/projectImages/Swiggy.PNG"),
      desc: "Swiggy clone with the help of Live API of Swiggy food delivering App. React,TailwindCSS and redxutoolkit is used to build this project.",
    },
  ],
};

export function Projects () {
  return (
   <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/kumar007ambi/netflix_gpt" target="_blank" rel="noreferrer">
                  <img src={github} alt="Visit site" /></a>
                <a href="https://github.com/kumar007ambi/netflix_gpt" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Netflix‑MovieSuggestor</h3>
              <p>Developed a Full‑Stack Web Application with the help of Tailwind CSS for rapid UI development. </p>
            </div>
            <footer> <ul className="tech-list"> <li>ReactJS</li> <li>GeminiAI</li> <li>Firebase</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/AI-Chatbot-Assistant" target="_blank" rel="noreferrer">
                  <img src={github} alt="Visit site" /> </a>
                <a href="https://ai-chatbot-t8fn.onrender.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>GeniusBot: AI-Powered Assistance with PDF Insight</h3>
              <p>
                Developed an interactive chatbot application using Streamlit, OpenAI's GPT-3.5-turbo language model, and PyPDF2 for PDF text extraction, enabling users to ask context-based questions on uploaded PDFs and general queries.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Streamlit</li>
                <li>PyPDF2</li>
                <li>LangChain</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/Jupyter-Notebook/tree/main/Credit%20Risk%20Analysis" target="\_blank" rel="noreferrer">
                  <img src={github} alt="Visit site" />
                </a>
                <a href="https://github.com/CodeVinayak/Jupyter-Notebook/blob/main/Credit%20Risk%20Analysis/Credit_Risk_Analysis.ipynb" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Credit Risk Analysis Project</h3>
              <p>
                Developed a highly accurate credit risk classification model using XGBoost, achieving 100% precision, recall, and F1-scores for predicting loan defaults.Implemented rigorous data preprocessing, feature engineering, and hyperparameter tuning on imbalanced credit risk data, employing ensemble methods, cross-validation, and model interpretation techniques.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>XGBoost</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        </div>
    </Container>
  )
}


//  <>
//       <div id="projects" className="flex justify-evenly h-[500px]">
//         {projects.project.map((item, i) => {
//           return (
//             <div key={i} className="p-6 m-2 shadow-slate-950">
//               <div  className="bg-green-200 rounded-xl shadow-lg shadow-indigo-400/40 hover:shadow-indigo-800/80 w-[300px] ">
//                 <p className="font-bold text-xl text-center">{item.projectTitle}</p>
//                 <div className="flex justify-center items-center "><img className="rounded-xl" src={item.projectlogo} alt="company-logo" /></div>
//                 <p className="font-serif text-pretty">- {item.desc}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
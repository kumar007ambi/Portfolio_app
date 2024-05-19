import React from 'react';

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
    <>
      <div className="flex justify-evenly ">
        {projects.project.map((item, i) => {
          return (
            <div key={i} className="p-6 m-2 shadow-slate-950">
              <div  className="bg-green-200 rounded-xl shadow-lg shadow-indigo-400/40 hover:shadow-indigo-800/80 w-[300px] ">
                <p className="font-bold text-xl text-center">{item.projectTitle}</p>
                <div className="flex justify-center items-center "><img className="rounded-xl" src={item.projectlogo} alt="company-logo" /></div>
                <p className="font-serif text-pretty">- {item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}


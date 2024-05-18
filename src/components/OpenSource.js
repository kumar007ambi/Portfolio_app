import React from 'react'

const openSourceContribution = {
  projectsContribution: [
    {
      title: "Social Winter Of Code Season 4",
      logo: require("../components/assets/openSource/SWOC4.png"),
      date: "Jan 2024 – Feb 2024",
    },
    {
      title: "Hacktoberfest 2023",
      logo: require("../components/assets/openSource/HACTOBERFEST2023.jpg"),
      date: "Oct 2023 – Oct 2023",
    },
    {
      title: "Social Summer of Code 2023",
      logo: require("../components/assets/openSource/SWOC2.png"),
      date: "June 2023 – July 2023",
    },
    {
      title: "GirlScript Summer of Code 2023",
      logo: require("../components/assets/openSource/GSSOC2023.png"),
      date: "May 2023– Aug 2023",
    },
  ],
};

const OpenSource = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2   justify-evenly ">
        {openSourceContribution.projectsContribution.map((item, i) => {
          return (
            <div key={i} className="p-2 m-2 shadow-slate-950">
              <div  className="bg-green-200 rounded-xl shadow-lg shadow-indigo-400/40 hover:shadow-indigo-800/80 w-[200px] ">
                <p className="font-bold text-xl text-center">{item.title}</p>
                <div className="flex justify-center items-center "><img className="rounded-xl" src={item.logo} alt="company-logo" /></div>
                <p className="font-serif text-pretty">{item.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default OpenSource